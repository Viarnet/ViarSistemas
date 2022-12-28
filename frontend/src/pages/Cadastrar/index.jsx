import { Button, Container, FormContainer, InputText } from "./style";
import { ButtonComponent } from "../../components/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MiniLoading } from '../../components/MiniLoading'
import Select from 'react-select';
import { useState } from "react";
import axios from 'axios';

const options = [
    { value: 0, label: 'Comercial' },
    { value: 3, label: 'Suporte' },
    { value: 6, label: 'Administrador' }
]

export function Cadastrar() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [setor, setSetor] = useState("");
    const [id, setId] = useState("");
    const [loading, setLoading] = useState(false);





    async function handleOnSubmit() {

        if (email && nome && senha && setor && id) {
            setLoading(true)
            await axios.post('http://192.168.0.95:3333/users/create', {
                name: nome,
                email,
                password: senha,
                role: Number(setor),
                id_colaborador: Number(id)
            }).then(({ data }) => {
                if (data.error) {
                    if (data.error == "O usuario já existe!") {
                        setLoading(false)
                        toast.error("O Cadastro já Existe!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    } else {
                        setLoading(false)
                        toast.error("Houve um Erro!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                    }
                } else {
                    setNome("");
                    setEmail("");
                    setId("");
                    setSenha("");
                    setSetor("");
                    setLoading(false);

                    toast.success(`Cadastro ${email} criado com sucesso!`, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            })
        } else {
            toast.error("Preencha todos os Dados!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <Container>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
            <h1>Cadastro de Usuarios</h1>

            <FormContainer>
                <InputText type='text' placeholder="Nome Completo"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                />
                <InputText type='email' placeholder="Email" autoComplete="off"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <InputText type='password' placeholder="Senha"
                    value={senha}
                    onChange={(e) => { setSenha(e.target.value) }}
                />
                <Select options={options} placeholder="Informe o Setor" styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: 400,
                        textAlign: 'center',
                    }),
                }}
                    onChange={(e) => { setSetor(e.value) }}
                />
                <InputText type='number' placeholder="ID do Colaborador IXC"
                    value={id}
                    onChange={(e) => { setId(e.target.value) }} />
                    <ButtonComponent Click={handleOnSubmit} loading={loading}>Cadastrar</ButtonComponent>
            </FormContainer>
        </Container>
    );
}
