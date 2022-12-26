import { useContext } from "react";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ButtonComponent } from "../Button";
import { Container, ModalContainer, Overlay, Subtitle, Title, Header, ComponentContainer, IconClose,Footer, Body, ButtonSim, ButtonNao } from "./styles";

export function ModalComponent({children, isTitle, isSubtitle, handleYes, handleNo, handleButton, isConfirm, isButtom}) {

  const Provider = useContext(AuthContext);

  function handleCloseModal(){
    Provider.setModalOpen(false)
  }
  
  return (
     <Container>
      {Provider.modalOpen && <Overlay></Overlay>}
      {Provider.modalOpen && <ModalContainer>
        <Header>{isTitle && <Title>{isTitle}</Title>}<IconClose className="bx bx-x" onClick={handleCloseModal}/></Header>
        {isSubtitle && <Subtitle>{isSubtitle}</Subtitle>}
        <Body>
          <ComponentContainer>
            {children}
          </ComponentContainer>
        </Body>
        <Footer>
          {isConfirm && <ButtonComponent Click={handleYes}>SIM</ButtonComponent>}{isConfirm && <ButtonComponent Click={handleCloseModal}>NÃO</ButtonComponent>}
          {isButtom && <ButtonComponent Click={handleButton}>{isButtom}</ButtonComponent>}
        </Footer>
      </ModalContainer>}
    </Container>
  );
}