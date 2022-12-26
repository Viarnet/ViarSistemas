import { Container, ContainerLeft, ContainerRight, Email, Name } from "./styles";

export function Usuarios({usuario, email, handleModalOpen, handleModalEditOpen, handleOnSubmit}) {

    return (
        <Container>
            <ContainerLeft>
                <Name>{usuario}</Name>
                <Email>{email}</Email>
            </ContainerLeft>
            <ContainerRight>
            <i className='bx bx-trash'onClick={()=>{handleModalOpen(email, usuario)}}></i>
            <i className='bx bx-edit-alt' onClick={()=>{handleModalEditOpen(email, usuario)}}></i>
            </ContainerRight>
        </Container>

            

    )
}