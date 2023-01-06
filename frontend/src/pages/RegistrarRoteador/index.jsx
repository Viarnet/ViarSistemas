import React from 'react';
import { Button, Container, FormContainer, InputText } from "./styles.js";
import { ButtonComponent } from "../../components/Button";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import axios from 'axios';
import Select from 'react-select';


export function RegistrarRoteador() {

    const [nome, setNome] = useState("");
    const [marca, setMarca] = useState("");
    const [wan, setWan] = useState("");
    const [lan, setLan] = useState("");
    const [redeswifi, setRedeswifi] = useState("");
    const [cobertura2g, setCobertura2g] = useState("");
    const [cobertura5g, setCobertura5g] = useState("");
    const [image, setImage] = useState();
    const [loading, setLoading] = useState(false);
    
    const options = [
        { value: "TP-LINK", label: 'TP-LINK' },
        { value: "D-LINK", label: 'D-LINK' },
        { value: "MERCUSYS", label: 'MERCUSYS' },
        { value: "HUAWEI", label: 'HUAWEI' },
        { value: "FIBERHOME", label: 'FIBERHOME' },
        { value: "UBIQUITI", label: 'UBIQUITI' },
        { value: "INTELBRAS", label: 'INTELBRAS' },
        { value: "XIAOMI", label: 'XIAOMI' },
        { value: "MULTILASER", label: 'MULTILASER' },
        { value: "MIKROTIK", label: 'MIKROTIK' }
    ]

    async function handleOnSubmit() {

        // if (marca && nome && wan && lan && id) {
        //     setLoading(true)
        //     await axios.post('http://192.168.0.95:3333/users/create', {
        //         name: nome,
        //         email,
        //         password: senha,
        //         role: Number(setor),
        //         id_colaborador: Number(id)
        //     }).then(({ data }) => {
        //         if (data.error) {
        //             if (data.error == "O usuario já existe!") {
        //                 setLoading(false)
        //                 toast.error("O Cadastro já Existe!", {
        //                     position: "top-right",
        //                     autoClose: 3000,
        //                     hideProgressBar: false,
        //                     closeOnClick: true,
        //                     pauseOnHover: true,
        //                     draggable: true,
        //                     progress: undefined,
        //                     theme: "dark",
        //                 });
        //             } else {
        //                 setLoading(false)
        //                 toast.error("Houve um Erro!", {
        //                     position: "top-right",
        //                     autoClose: 3000,
        //                     hideProgressBar: false,
        //                     closeOnClick: true,
        //                     pauseOnHover: true,
        //                     draggable: true,
        //                     progress: undefined,
        //                     theme: "dark",
        //                 });
        //             }
        //         } else {
        //             setNome("");
        //             setEmail("");
        //             setId("");
        //             setSenha("");
        //             setSetor("");
        //             setLoading(false);

        //             toast.success(`Cadastro ${email} criado com sucesso!`, {
        //                 position: "top-right",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "dark",
        //             });
        //         }
        //     })
        // } else {
        //     toast.error("Preencha todos os Dados!", {
        //         position: "top-right",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "dark",
        //     });
        // }
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
            <h1>Cadastro de Roteadores</h1>

            <FormContainer>
                <InputText type='text' placeholder="Nome"
                    value={nome}
                    onChange={(e) => { setNome(e.target.value) }}
                />
                <Select options={options} placeholder="Informe a Marca" styles={{
                    control: (baseStyles, state) => ({
                        ...baseStyles,
                        width: 400,
                        textAlign: 'center',
                    }),
                }}
                    onChange={(e) => { setMarca(e.value) }}
                />
                <InputText type='text' placeholder="WAN"
                    value={wan}
                    onChange={(e) => { setWan(e.target.value) }}
                />
                <InputText type='text' placeholder="LAN"
                    value={lan}
                    onChange={(e) => { setLan(e.target.value) }}
                />
                <InputText type='text' placeholder="Redes Wi-Fi"
                    value={redeswifi}
                    onChange={(e) => { setRedeswifi(e.target.value) }}
                />
                <InputText type='text' placeholder="Cobertura 2G"
                    value={cobertura2g}
                    onChange={(e) => { setCobertura2g(e.target.value) }}
                />
                <InputText type='text' placeholder="Cobertura 5G"
                    value={cobertura5g}
                    onChange={(e) => { setCobertura5g(e.target.value) }}
                />
                <InputText type='file' placeholder="Imagem"
                    value={image}
                    onChange={(e) => { setImage(e.target.value) }}
                />
                <ButtonComponent Click={handleOnSubmit} loading={loading}>Cadastrar</ButtonComponent>
            </FormContainer>
        </Container>
    );
}