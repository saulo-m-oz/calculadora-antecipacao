import { InputComponent } from "./common/inputs"

export const FormComponent = () : JSX.Element => {
    return(
        <form>
            <InputComponent label="Informe o valor da venda*" name="venda" placeholder="Ex.: R$1.000,00" required />
            <InputComponent label="Escolha em quantas parcelas*" name="parcelas" placeholder="Ex.: 5" required />
            <InputComponent label="Informe o percentual de MDR*" name="mdr" placeholder="Ex.: 3%" required />
        </form>
    )
}