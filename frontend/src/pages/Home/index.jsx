import { ButtonComponent } from "../../components/Button";
import { ModalComponent } from "../../components/ModalComponent";
import { Container } from "./style";

let data = [
    {id: 1, name: "jorge"},
    {id: 2, name: "jorge2"},
    {id: 3, name: "jorge3"},
    {id: 4, name: "jorge4"},
]

export function Home(){
    return (
        <Container>
            <h1>Página Inicial</h1>
            <ModalComponent 
            isTitle="Cliente possui varios contratos!"
            isSubtitle="Escolha um contrato:" 
        
            >
                {data.map((cliente, index)=>
                <div key={index}>
                <ButtonComponent>
                {index + 1 } - {cliente.name}
                </ButtonComponent>
                </div>
                )}
            </ModalComponent>
        </Container>
        
    );
}
