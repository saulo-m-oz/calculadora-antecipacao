import {FlexContainer} from "./common/container";
import format from "../utils/format";

export const ResultComponent = ({data} : any) => {
    return(
        <FlexContainer className="col-span-3 lg:col-span-1 flex-col p-10 gap-10 justify-center bg-gray-100 bg-opacity-50">
            <h2 className="text-2xl text-blue-500 font-bold italic border-b">Você receberá:</h2>
            <p className="text-lg font-bold text-blue-400 italic">Amanhã: <strong>{format(data[1])}</strong></p>
            <p className="text-lg font-bold text-blue-400 italic">Em 15 dias: <strong>{format(data[15])}</strong></p>
            <p className="text-lg font-bold text-blue-400 italic">Em 30 dias: <strong>{format(data[30])}</strong></p>
            <p className="text-lg font-bold text-blue-400 italic">Em 90 dias: <strong>{format(data[90])}</strong></p>
        </FlexContainer>
    )
}