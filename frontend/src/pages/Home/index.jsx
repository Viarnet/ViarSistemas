import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container } from "./style";

export function Home(){
    const auth = useContext(AuthContext);

    return (
        <Container>
            <h1>Página Inicial</h1>

            Olá {auth.user.name}
        </Container>
        
    );
}
