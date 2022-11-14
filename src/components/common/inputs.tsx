import {InputHTMLAttributes} from "react";

// Interface defining what's necessary to create a new customized input
interface InputProp extends InputHTMLAttributes<HTMLInputElement>{
    name: string;
    label: string;
    placeholder: string;
}

export const InputComponent = ({name, label, placeholder, ...rest} : InputProp) : JSX.Element => {
    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} placeholder={placeholder} {...rest} className="p-3 border" />
        </div>
    )
}