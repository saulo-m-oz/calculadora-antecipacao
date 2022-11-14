import { InputComponent } from "./common/inputs"
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm, SubmitHandler} from "react-hook-form";
import * as yup from "yup";

export interface IFormInput{
    amount: number;
    installments: number;
    mdr: number;
    days?: Array<number>;
}

const formSchema = yup.object({
    amount: yup.number().required(),
    installments: yup.number().required(),
    mdr: yup.number().required(),
    days: yup.number()
})

export const FormComponent = () : JSX.Element => {

    const {register, handleSubmit, formState: { errors }} = useForm<IFormInput>({
        resolver: yupResolver(formSchema)
    });

    const onSubmit : SubmitHandler<IFormInput> = (data) => {
        console.log(data);

    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div>
                <InputComponent label="Informe o valor da venda*" id="amount" placeholder="Ex.: R$1.000,00" register={register} required />
                {errors.amount ? "Valor da venda é obrigatório" : null}
            </div>
            <div>
                <InputComponent label="Escolha em quantas parcelas*"  id="installments" placeholder="Ex.: 5" register={register} required />
                {errors.installments ? "Quantidade de parcelas é obrigatório" : null}
            </div>
            <div>
                <InputComponent label="Informe o percentual de MDR*" id="mdr"  placeholder="Ex.: 3%" register={register} required />
                {errors.mdr ? "Percentual de MDR é obrigatório" : null}
            </div>
            <button>Calcular</button>
        </form>
    )
}