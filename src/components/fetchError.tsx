import {FlexContainer} from "./common/container";

export const FetchErrorComponent = () => {
    return(
        <FlexContainer className="col-span-3 lg:col-span-1 flex-col p-10 gap-10 justify-center bg-gray-100 bg-opacity-50">
            <h2 className="text-2xl text-blue-500 font-bold italic border-b">Parece que ocorreu um erro...</h2>
        </FlexContainer>
    )
}