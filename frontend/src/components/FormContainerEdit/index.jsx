import { FormContainer, InputText } from "./style";
import Select from 'react-select';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ButtonComponent } from "../Button";

export function FormContainerEdit({ email, handleOnSubmit, loading}) {
  console.log(email)
  const options = [
    { value: 0, label: 'Comercial' },
    { value: 3, label: 'Suporte' },
    { value: 6, label: 'Administrador' }
  ]

  const [nome, setNome] = useState("");
  const [setor, setSetor] = useState("");
  const [id, setId] = useState("");

  const auth = useContext(AuthContext);
  useEffect(() => {
    (async () => {
      await axios.get(`http://192.168.0.95:3333/user/${email}`, {
        headers: {
          'Authorization': `Bearer ${auth.token1}`
        }
      }).then(({ data }) => {
        console.log(data)
        setNome(data.user[0].name);
        setSetor(data.user[0].role);
        setId(data.user[0].id_colaborador);
      })
    })()
  }, [])

  

  return (
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
          <ButtonComponent loading={loading} Click={()=>{handleOnSubmit(nome ,email, setor,id)}}>Atualizar</ButtonComponent>
        </FormContainer>
  );
}