import { useContext, useState } from "react";
import { Container, Button, Nome, Endereco, Id, ContainerLeft, ContainerRight, Container1, ButtonEncaminhar } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import { ModalSelect } from "../../components/ModalSelect"
import { ButtonComponent } from "../../components/Button";
import { ModalComponent } from "../../components/ModalComponent";
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { MiniLoading } from "../../components/MiniLoading";
import { Pagenation } from "../../components/Pagenation/Pagenation";

import './style.css'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

export const EncaminharOS = () => {
    const Provider = useContext(AuthContext)
    const [select, setSelect] = useState();
    const [os, setOS] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState(false);
    const [tecnico, setTecnico] = useState();
    const [term, setTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [osPerPage, setOsPerPage] = useState(20);

    async function handleSearch(id){
        setLoading(true);
        if(id == 'Liberação de portas'){
            await axios.get('http://192.168.0.95:3333/os/getOS/31').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }else{
            await axios.get('http://192.168.0.95:3333/os/getOS/33').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }
    }

    const indexOfLastOs = currentPage * osPerPage;
    const indexOfFirstOs = indexOfLastOs - osPerPage;
    const currentOs = os.slice(indexOfFirstOs, indexOfLastOs);


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
                const result = await axios.post('http://192.168.0.95:3333/os/edit', {
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
                setLoading(true);
                await sleep(2000);
                setLoading(false);
                handleSearch(select);
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

    const paginate = (pageNumbers) => setCurrentPage(pageNumbers)

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
            
            <div style={{paddingBottom : "2%"}}>
            <h1>Encaminhar Ordens de Serviço</h1>
            </div>
            <div style={{display: "flex", columnGap: "10px", paddingBottom: '2%'}}>
                <label htmlFor="sel" style={{paddingTop: '2px'}}>Selecione o Assunto:</label>
                <select value={select} onChange={e=>setSelect(e.target.value)} style={{border: '2px solid black', borderRadius: '6px'}}>
                    <option>Recolha de equipamentos</option>
                    <option>Liberação de portas</option>
                </select>
                {os.length > 0 ? <input type="text" className="search" id="search" onChange={(e) => {setTerm(e.target.value)}} placeholder="Filtrar..." style={{border: '2px solid black', borderRadius: '6px', textAlign: 'center'}}></input> : <></>}
                <Button onClick={() => { handleSearch(select) }}><i className='bx bx-search'></i></Button>
            </div>
            {loading && <MiniLoading/>}
            <div style={{paddingTop : '20px'}}></div>
            {term == "" && os.length > 10 ? 
            <Pagenation osPerPage={osPerPage} totalOs={os.length} os={currentOs} paginate={paginate}/>
            : os.filter((val)=>{
                if(term == ""){
                    return val;
                }else if (val.nomeCliente.toLowerCase().includes(term.toLowerCase())){
                    return val
                }else if(val.endereco.toLowerCase().includes(term.toLowerCase())){
                    return val
                }
            }).map((ordem, index)=> (
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
            <div style={{paddingBottom: '20px'}}></div>
            <div style={{paddingBottom: '10px', paddingTop: '3px'}}>
            {os.length > 0 ? <ButtonComponent Click={handlesetIsOpen}>Encaminhar</ButtonComponent> : <></>}
            </div>
            {modal && <ModalSelect tecnico={tecnico} handleSetTecnico={setTecnico} handleRegister={handleRegister}/>}
        </Container>
    );
}