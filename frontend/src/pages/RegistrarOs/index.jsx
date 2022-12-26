import { useContext, useState } from "react";
import { Loading } from "../../components/Loading";
import { Modal } from "../../components/Modal";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { Container, InputText, Button, Icon } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonComponent } from "../../components/Button";

import axios from 'axios';
import { MiniLoading } from "../../components/MiniLoading";

export const RegistrarOs = () => {
    const auth = useContext(AuthContext);
    const [clientesInputs, setClientesInputs] = useState([]);
    const [messagem1, setMessagem1] = useState("");
    const [messagem2, setMessagem2] = useState("");
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [arraycontratos, setArrayContratos] = useState([]);
    const [selectedCliente, setSelectedCliente] = useState("");
    const [selectedIndexCliente, setSelectedIndexCliente] = useState("");

    function handleAddInputCliente() {
        setClientesInputs([...clientesInputs, { }]);
    }

    function handleChangeCliente(e, index) {
        clientesInputs[index] = { id: "", nome: e.target.value };
        setClientesInputs([...clientesInputs])
    }

    async function handleGetCliente(e, index) {

        const cliente = e.target.value;

        clientesInputs[index] = { id: clientesInputs[index].id, nome: clientesInputs[index].nome , status: "loading"};
        setClientesInputs([...clientesInputs]);
        const result = await axios.get(`http://192.168.0.95:3000/os/getcontracts/${cliente.toUpperCase()}`)
        if (result.data.status == 0 || result.data.status == 404) {
            clientesInputs[index] = { id: clientesInputs[index].id, nome: clientesInputs[index].nome , IdCliente: result.data.IdCliente, status: "false"};
            setClientesInputs([...clientesInputs]);
        } else {
            setArrayContratos(result.data)
            setSelectedIndexCliente(index)
            setSelectedCliente(cliente);
            if (result.data.IdContrato.length > 1) {
                setModal(true)
            } else {
                clientesInputs[index] = { id: result.data.IdContrato[0], nome: cliente,IdCliente: result.data.IdCliente , status: "true"};
                setClientesInputs([...clientesInputs]);
            }
        }
    }
    async function handleSelectedContrato(contrato, IdCliente) {
        clientesInputs[selectedIndexCliente] = { id: contrato, nome: selectedCliente , IdCliente, status: "true"};
        setClientesInputs([...clientesInputs])
    }

    function handleRemoveInputPhone(position) {
        setClientesInputs([...clientesInputs.filter((_, index) => index !== position)]);
    }

    async function handleCreateOs() {
        let errorInputs  = clientesInputs.filter(contrato => contrato.status == "false");
        console.log(clientesInputs.length);
        if(errorInputs.length > 0){
            toast.error(`Não foi possível encontrar ${errorInputs.length} cliente(s).`, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "dark",
            });
        }else{
            const result = await axios.post("http://192.168.0.95:3000/os/create",
        {
            arrayContratos: clientesInputs,
            mensagemPadraoAbertura: messagem1,
            mensagemPadraoEncerra: messagem2,
            idColaborador: auth.user.id_colaborador
        })
        toast.success(result.data.message, {
            position: "top-center",
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
        <Container style={{backgroundColor : "#E4E9F7"}}>
            <div style={{paddingBottom: '40px'}}>
                <h1>Registrar Ordens de Serviço</h1>
            </div>
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
            {loading && <Loading />}
            {!loading && <div style={{ display: 'flex', justifyContent: 'center', width: '80%', height: "250px", columnGap: '10%', padding: '10px 10%' }}>
                <textarea type="text"
                    id="padrao" rows="15" cols="38"
                    placeholder="Mensagem Abertura"
                    value={messagem1}
                    onChange={(e) => { setMessagem1(e.target.value) }}
                    style={{ borderRadius: '8px', border: '2px solid', padding: '5px', resize: 'none' }} />
                <textarea type="text"
                    monowr2id="padrao2" rows="15" cols="38"
                    placeholder="Mensagem Encerramento"
                    value={messagem2}
                    onChange={(e) => { setMessagem2(e.target.value) }}
                    style={{ borderRadius: '8px', border: '2px solid', padding: '5px', resize: 'none'  }}
                />
            </div>}
            {modal && <Modal dados={arraycontratos} isOpen={setModal} handleSelectedContrato={handleSelectedContrato} />}

            {!loading && <Button
                style={{
                    width: '30px',
                    height: 30,
                    borderRadius: '8px'
                }}
                onClick={handleAddInputCliente}
            >+
            </Button>}
            {!loading && clientesInputs.map((cliente, index) => (
                <div style={{ paddingTop: '10px', display: 'flex', justifyContent: 'center', width: '35rem', backgroundColor:'#E4E9F7' }} key={index}>
                    <InputText
                        type='text'
                        id={`cliente-${index + 1}`}
                        value={cliente.nome || ""}
                        placeholder={`Nome`}
                        onChange={(e) => { handleChangeCliente(e, index) }}
                        onBlurCapture={(e) => { handleGetCliente(e, index) }}
                        error={true}
                    />
                    
                    {cliente.status == 'true' &&  <i className='bx bx-check' style={{color: 'green',display: 'flex', alignItems: 'center', marginRight: '10px', fontSize: '26px'}}></i>}
                    {cliente.status == 'false' &&  <i className='bx bx-x' style={{color: 'red',display: 'flex', alignItems: 'center', marginRight: '10px', fontSize: '26px'}}></i>}
                    {cliente.status == 'loading' &&  <Icon className='bx bx-loader-alt' style={{color: 'black',display: 'flex', alignItems: 'center', marginRight: '10px', fontSize: '26px'}}></Icon>}
                    <div>
                        <Button onClick={() => { handleRemoveInputPhone(index) }} style={{width: 30, height: 30}}><i className='bx bx-trash'></i></Button>
                    </div>
                </div>
            ))}
           {!loading && <div style={{position: 'relative' }}>
                <ButtonComponent Click={handleCreateOs}>Registrar</ButtonComponent>
                
            </div>}
        </Container>
    );
}