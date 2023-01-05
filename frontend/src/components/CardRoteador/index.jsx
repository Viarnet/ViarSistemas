import React from 'react';

import { Roteador, Nome, Compatibilidade } from './styles';

export function CardRoteador({handleModalOpen, index, dados}) {
  return (
      <Roteador key={index} onClick={() => {handleModalOpen(dados)}}>
        <img src={`http://192.168.0.95:3333/uploads/${dados.imagePath}`} />
        <Nome>{dados.nome}</Nome>
        <Compatibilidade>{dados.compatibilidade}</Compatibilidade>
      </Roteador>
  );
}
