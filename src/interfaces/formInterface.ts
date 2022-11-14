// Interface for Input Values
import {UseMutateAsyncFunction} from "@tanstack/react-query";
import {AxiosResponse} from "axios";

export interface IFormInput {
    amount: number;
    installments: number;
    mdr: number;
    days?: Array<number>;
}

export interface DataProps{
    mutateAsync: any
    isLoading: boolean;
    isError: boolean;
    data: any;
}