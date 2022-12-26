import "./style.css";

export function ModalConfirm({usuario, email, handleDeleteUser,handlesetIsOpen}) {
  

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Deseja Apagar o Cadastro?<br/><br/>{usuario}</h2>
        <h3>{email}</h3>
        <div className="buttons">
          <button type="button" className="sim" onClick={()=>{handleDeleteUser(email)}}>Sim</button>
          <button type="button" className="nao" onClick={()=>{handlesetIsOpen()}}>Não</button>
        </div>
      </div>
    </div>
  );
}