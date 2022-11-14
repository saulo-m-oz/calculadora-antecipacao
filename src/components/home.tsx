import {ResultComponent} from "./result";
import {UseMutateAsyncFunction, useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {FetchErrorComponent} from "./fetchError";
import {IFormInput} from "../interfaces/formInterface";
import {Form} from "./forms";

export const Home = (): JSX.Element => {

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

    return (
        <div className={`${data || isError ? "max-w-full" : "max-w-xl mx-auto"} lg:grid-cols-3 grid border rounded-lg shadow-md`}>
            <Form mutateAsync={mutateAsync} isLoading={isLoading} isError={isError} data={data} />
            {isSuccess ? <ResultComponent data={data.data}/> : null}
            {isError ? <FetchErrorComponent /> : null}
        </div>
    )
}