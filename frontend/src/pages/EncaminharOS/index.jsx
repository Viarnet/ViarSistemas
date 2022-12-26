import { useContext, useState } from "react";
import { Container, Button, Nome, Endereco, Id, ContainerLeft, ContainerRight, Container1, ButtonEncaminhar } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import './style.css'
import 'react-toastify/dist/ReactToastify.css';
import { ModalSelect } from "../../components/ModalSelect"
import axios from 'axios';
import { ButtonComponent } from "../../components/Button";
import { ModalComponent } from "../../components/ModalComponent";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const EncaminharOS = () => {
    const Provider = useContext(AuthContext)
    const [select, setSelect] = useState();
    const [os, setOS] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [tecnico, setTecnico] = useState();

    async function handleSearch(id){
        setLoading(true);
        if(id == 'Liberação de portas'){
            await axios.get('http://192.168.0.95:3000/os/getOS/31').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }else{
            await axios.get('http://192.168.0.95:3000/os/getOS/33').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function handlesetIsOpen(){
        setModal(!modal);
    }

    function handleonChange(event, index){
        const values = [...os];
        values[index].isAdded = !values[index].isAdded;
        event.target.value = values[index].isAdded;
    }

    async function handleRegister(){
        handlesetIsOpen();
        if (tecnico == '1' || tecnico == undefined){

        }else{
            var selecionadas = os.filter(function (ordem){
                return ordem.isAdded == true;
            })
            if(selecionadas.length >= 1){
                const result = await axios.post('http://192.168.0.95:3000/os/edit', {
                    arrayOS : selecionadas,
                    idTecnico: tecnico
                })
                toast.success(result.data.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
                await sleep(2000)
                window.location.reload(false);
            }else{
                toast.error('Nenhuma O.S foi selecionada', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                });
            }
        }
    }

    return (
        <Container style={{backgroundColor : "#E4E9F7"}}>
            {Provider.modalOpen && 
            <ModalComponent >
               
            </ModalComponent>}
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
            
            <div style={{paddingBottom : "5%"}}>
            <h1>Encaminhar Ordens de Serviço</h1>
            </div>
            <div style={{display: "flex", columnGap: "10px"}}>
                <label htmlFor="sel" style={{paddingTop: '2px'}}>Selecione o Assunto:</label>
                <select value={select} onChange={e=>setSelect(e.target.value)} style={{border: '2px solid black', borderRadius: '6px'}}>
                    <option>Recolha de equipamentos</option>
                    <option>Liberação de portas</option>
                </select>
                <Button onClick={() => { handleSearch(select) }}><i className='bx bx-search'></i></Button>
            </div>
            <br />
            {os.map((ordem, index)=> (
                <Container1 key={ordem.id} id='divOS'>
                    <ContainerLeft>
                        <Nome>{ordem.nomeCliente}</Nome>
                        <Endereco>{ordem.endereco}</Endereco>
                        <Id>{ordem.id}</Id>
                    </ContainerLeft>
                    <ContainerRight>
                        <input type="checkbox" className='check' onChange={(e)=> handleonChange(e, index)}/>
                    </ContainerRight>
                </Container1>
            ))}
            <div style={{paddingBottom: '10px'}}>
                <ButtonComponent Click={handlesetIsOpen} loading={loading}>Encaminhar</ButtonComponent>
            </div>
            {modal && <ModalSelect tecnico={tecnico} handleSetTecnico={setTecnico} handleRegister={handleRegister}/>}
        </Container>
    );
}