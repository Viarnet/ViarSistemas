import "./style.css";
import { Button, Container, FormContainer, InputText } from "./style";
import { MiniLoading } from '../../components/MiniLoading'
import Select from 'react-select';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export function ModalEdit({ usuario, email, handleDeleteUser, handlesetIsOpen, handleOnSubmit}) {
  const options = [
    { value: 0, label: 'Comercial' },
    { value: 3, label: 'Suporte' },
    { value: 6, label: 'Administrador' }
  ]

  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      await axios.get(`http://localhost:3333/user/${email}`, {
        headers: {
          'Authorization': `Bearer ${auth.token1}`
        }
      }).then(({ data }) => {
        setNome(data.user.name);
        setSetor(data.user.role);
        setId(data.user.id_colaborador);
      })
    })()
  }, [])

  

  return (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Atualização de Cadastro</h2>
        <FormContainer>
          <InputText type='text' placeholder="Nome Completo"
            value={nome}
            onChange={(e) => { setNome(e.target.value) }}
          />
          <Select options={options} placeholder="Informe o Setor" styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: 400,
              textAlign: 'center',
              fontSize: 16
            }),
          }}
            onChange={(e) => { setSetor(e.value) }}
          />
          <InputText type='number' placeholder="ID do Colaborador IXC"
            value={id}
            onChange={(e) => { setId(e.target.value) }} />
          <Button type='button' onClick={() => { handleOnSubmit(nome ,email, setor,id) }} disabled={loading}>{loading && <MiniLoading />}{!loading && "Atualizar"}</Button>

        </FormContainer>
      </div>
    </div>
  );
}