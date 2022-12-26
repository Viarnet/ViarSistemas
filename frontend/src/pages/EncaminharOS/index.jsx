import { useContext, useState } from "react";
import { Loading } from "../../components/Loading";
import { Container, Button, Nome, Endereco, Id, ContainerLeft, ContainerRight, Container1 } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Ordens } from "../../components/Ordens"; 

import axios from 'axios';
import { MiniLoading } from "../../components/MiniLoading";

export const EncaminharOS = () => {
    const [select, setSelect] = useState();
    const [os, setOS] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selecionadas, setSelecionadas] = useState([])

    async function handleSearch(id){
        setLoading(true);
        if(id == 'Liberação de portas'){
            await axios.get('http://localhost:3000/os/getOS/31').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }else{
            await axios.get('http://localhost:3000/os/getOS/33').then(({data})=>{
                setOS(data.ordem)
                setLoading(false);
            })
        }
    }

    function handleonChange(event, index){
        const values = [...os];
        values[index].isAdded = event.target.checked;
        setSelecionadas(values[index]);
    }

    return (
        <Container style={{backgroundColor : "#E4E9F7"}}>

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
            <h1>Encaminhar Ordens de serviço</h1>
            </div>
            <div style={{display: "flex", columnGap: "10px"}}>
                <label htmlFor="sel">Selecione o Assunto:</label>
                <select value={select} onChange={e=>setSelect(e.target.value)} style={{border: '2px solid black', borderRadius: '6px'}}>
                    <option>Recolha de equipamentos</option>
                    <option>Liberação de portas</option>
                </select>
                <Button onClick={() => { handleSearch(select) }}><i className='bx bx-search'></i></Button>
            </div>
            <br />
            {loading && <MiniLoading />}
            {os.map((ordem, index)=> (
                <Container1 key={ordem.id}>
                    <ContainerLeft>
                        <Nome>{ordem.nomeCliente}</Nome>
                        <Endereco>{ordem.endereco}</Endereco>
                        <Id>{ordem.id}</Id>
                    </ContainerLeft>
                    <ContainerRight>
                        <input type="checkbox" checked={ordem.isAdded} onChange={(e)=> handleonChange(e, index)}/>
                    </ContainerRight>
                </Container1>
            ))}
        </Container>
    );
}