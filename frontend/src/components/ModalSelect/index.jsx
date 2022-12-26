import { useState } from "react";
import "./style.css";
import { ButtonComponent } from "../Button";

export function ModalSelect({handleSetTecnico, tecnico, handleRegister}) {

  function handleSelected(){
    handleRegister();
  }
  
  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Para qual técnico deseja encaminhar?</h2>
        <br/><br/>
        <div className="divSelect">
          <div className="select-space">
            <select value={tecnico} onChange={e=>handleSetTecnico(e.target.value)} className="select-cus">
              <option value="1">Escolha um técnico</option>
              <option value="19">Jecimar</option>
              <option value="30">Mailo</option>
              <option value="14">Ezequiel</option>
              <option value="66">Leonardo</option>
            </select>
          </div>
          <div className="divBotao">
            <ButtonComponent Click={handleSelected}>Selecionar</ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  );
}