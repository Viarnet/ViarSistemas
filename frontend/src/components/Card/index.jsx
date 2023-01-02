import React from 'react';
import { Container, ContainerLeft, ContainerRight, DivPai } from './styles';

let Tipos = [
    "Alteração de Titularidade", 
    "Atribuir IP Fixo",
    "Belluno Resolvido",
    "Gerou Visita",
    "Huggy", 
    "Laudo Técnico",
    "Outros Setores",
    "Pós Belluno",
    "Pós O.S", 
    "Posição de O.S",
    "Presencial",
    "Telefonicos SAC",
    "Visita técnica",     
]


export function Card({tipo, valor, index, handleOnClickIncrease, handleOnClickDecrease}) {
  return (
    <DivPai>
        <Container>
            <ContainerLeft>
              <h6 style={{position: 'absolute', paddingLeft: '2%'}}>{Tipos[index]}</h6>
              <p style={{position: 'absolute', paddingLeft: '2%'}}>{valor}</p>
            </ContainerLeft>
            <ContainerRight>
              <button onClick={() => handleOnClickIncrease(index)}><i className='bx bx-plus'></i></button>
              <button onClick={() => handleOnClickDecrease(index)}><i className='bx bx-minus'></i></button>
            </ContainerRight>
        </Container>
    </DivPai>
  )
}