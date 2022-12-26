import { Container, ContainerLeft, ContainerRight, Nome, Id, Endereco } from "./styles";

export function Ordens(nome, endereco, id){
    return (
        <Container>
            <ContainerLeft>
                <Nome>{nome}</Nome>
                <Endereco>{endereco}</Endereco>
                <Id>{id}</Id>
            </ContainerLeft>
            <ContainerRight>
            <i className='bx bx-check-square'></i>
            </ContainerRight>
        </Container>
    )
}
