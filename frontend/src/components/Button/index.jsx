import { ButtonContainer } from "./styles";
import { MiniLoading } from "../MiniLoading";

export function ButtonComponent({children, loading, Click, color, backgroundColor, backgroundColorHover}){
    return (
        <ButtonContainer disabled={loading} onClick={Click} color={color} backgroundColor={backgroundColor} backgroundColorHover={backgroundColorHover}>
            {loading && <MiniLoading />}
            {!loading&& children}
        </ButtonContainer>
    )
}