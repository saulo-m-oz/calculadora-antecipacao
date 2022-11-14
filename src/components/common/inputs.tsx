import {InputHTMLAttributes} from "react";
import {UseFormRegister, Path, FieldErrorsImpl} from "react-hook-form"
import {IFormInput} from "../forms";

// Interface defining what's necessary to create a new customized input
interface IInputProp extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    id: Path<IFormInput>;
    register: UseFormRegister<IFormInput>;
    required: boolean;
    placeholder: string;
}

export const InputComponent = ({label, register, id, required, placeholder, ...rest} : IInputProp) : JSX.Element => {
    return (
        <div className="flex flex-col gap-1">
            <label>{label}</label>
            <input {...register(id, {required})} placeholder={placeholder} {...rest} className="p-3 border" />
        </div>
    )
}