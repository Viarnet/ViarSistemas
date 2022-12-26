import "./style.css";

export function Modal({dados, isOpen, handleSelectedContrato}) {
  function handleSelected(contrato, IdCliente){

    handleSelectedContrato(contrato, IdCliente);
    isOpen(!isOpen);
  }

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Cliente possui mais de um contrato.<br/> <br/>Escolha um:</h2>
        {dados.IdContrato.map((contrato, index)=>
          <div className="justify" key={index}>
          <button className="close-modal" onClick={() => {handleSelected(contrato, dados.IdCliente)}}>
          {index + 1 } - {contrato}
         </button>
        </div>
        )}
      </div>
    </div>
  );
}