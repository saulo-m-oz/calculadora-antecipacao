interface IErrorProp{
    error: string;
}

export const ErrorComponent = ({error} : IErrorProp) => {
    return(
        <span className="text-sm text-red-500 ml-0.5">{error}</span>
    )
}