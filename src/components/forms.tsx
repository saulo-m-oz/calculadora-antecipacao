import {InputComponent} from "./common/inputs"
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, SubmitHandler} from "react-hook-form";
import {ErrorComponent} from "./common/error";
import {ResultComponent} from "./result";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import * as yup from "yup";
import axios, {AxiosResponse} from "axios";
import {FetchErrorComponent} from "./fetchError";


// Interface for Input Values
export interface IFormInput {
    amount: number;
    installments: number;
    mdr: number;
    days?: Array<number>;
}

// Form Schema to validate inputs
const formSchema = yup.object({
    amount: yup.number().required(),
    installments: yup.number().min(1).max(12).required(),
    mdr: yup.number().required(),
    days: yup.number()
})

interface DataProps{
    isSuccess: boolean;
    isLoading: boolean;
    isError: boolean;
    data: AxiosResponse<any>;
}

export const FormComponent = (): JSX.Element => {

    // Initialize React Query Client
    const queryClient = useQueryClient();

    // Function to call the API request with data
    const calculate = (newCalc : IFormInput) => {
        return axios.post("https://frontend-challenge-7bu3nxh76a-uc.a.run.app", newCalc)
    }

    // Mutation setup with side effects (isSuccess, isLoading, isError)
    const {mutateAsync, isSuccess, isLoading, isError, data} = useMutation({
        mutationFn: calculate
    })

    // Form setup using React Hook Forms
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>({
        resolver: yupResolver(formSchema),
        reValidateMode: "onSubmit"
    });

    // Fetch the data to the API and reset forms after it returns any errors or success
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        await mutateAsync(data);
        reset();
    };

    return (
        <div className={`${data || isError ? "max-w-full" : "max-w-xl mx-auto"} lg:grid-cols-3 grid border rounded-lg shadow-md`}>
            <form onSubmit={handleSubmit(onSubmit)} className={`${data || isError ? "col-span-2" : "col-span-3"} flex flex-col p-10 gap-5`}>
                <h1 className="text-2xl font-bold text-gray-600 w-fit">Simule sua antecipação</h1>
                <div>
                    <InputComponent label="Informe o valor da venda*" id="amount" placeholder="Ex.: R$1.000,00"
                                    register={register} required/>
                    {errors.amount ? <ErrorComponent error="Valor da venda é obrigatório"/> : null}
                </div>
                <div>
                    <InputComponent label="Escolha em quantas parcelas*" id="installments" placeholder="Ex.: 5"
                                    register={register} required/>
                    <p className="text-sm text-gray-400 font-bold ml-0.5">Máximo de 12 parcelas.</p>
                    {errors.installments ? <ErrorComponent error="Quantidade de parcelas é obrigatório"/> : null}
                </div>
                <div>
                    <InputComponent label="Informe o percentual de MDR*" id="mdr" placeholder="Ex.: 3%"
                                    register={register} required/>
                    {errors.mdr ? <ErrorComponent error="Percentual de MDR é obrigatório"/> : null}
                </div>
                <button className={`${isLoading ? "disabled" : ""} p-5 border-0 bg-blue-500 text-white font-bold rounded-md`}>{isLoading ? 'Calculando...' : 'Calcular'}</button>
            </form>
            {isSuccess ? <ResultComponent data={data.data}/> : null}
            {isError ? <FetchErrorComponent /> : null}
        </div>
    )
}