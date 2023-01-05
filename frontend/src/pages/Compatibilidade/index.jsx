import { React, useState, useEffect, useContext } from 'react';
import { Div, Input } from './styles';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ModalComponent } from './../../components/ModalComponent';
import { CardRoteador } from '../../components/CardRoteador';
import './styles.css'
import axios from 'axios';

export function Compatibilidade() {

    const auth = useContext(AuthContext);

    const [roteadores, setRoteadores] = useState();
    const [marca, setMarca] = useState("TP-LINK");
    const [isTitle, setIsTitle] = useState("");
    const [isBody, setIsBody] = useState();
    

    useEffect(() => {
        (async () => {
            await axios.get(`http://192.168.0.95:3333/roteadores/${marca}`)
                .then(({ data }) => {
                    setRoteadores(data);
                })
        })()
    }, [marca]);

    function handleModalOpen(dados){
        setIsTitle("Informações")
        setIsBody(<BodyModal dados={dados}/>)
        auth.setModalOpen(true);
    }

    function BodyModal({dados}){
        return (
            <>
            <img src={`http://192.168.0.95:3333/uploads/${dados.imagePath}`} style={{width: "13rem"}}/>
            <div style={{fontSize: '1rem'}}>
                <h4>Marca: {dados.marca}</h4>
                <h4>Nome: {dados.nome}</h4>
                <h4>Wan: {dados.wan}</h4> 
                <h4>Lan: {dados.lan}</h4> 
                <h4>Redes Wi-Fi: {dados.redeswifi}</h4> 
                <h4>Cobertura 2G: {dados.cobertura2g}</h4> 
                <h4>Cobertura 5G: {dados.cobertura5g}</h4> 
            </div>
            </>
        )
    }

    
    return (
        <>
            {auth.modalOpen && 
            <ModalComponent 
            isTitle={isTitle}
            >
            {isBody}
            </ModalComponent>}
            <Div>
                <h1>Compatibilidade</h1>
            </Div>
            <Div>
            <div className="select">
                <select value={marca} onChange={e => setMarca(e.target.value)} >
                    <option value="TP-LINK">TP-Link</option>
                    <option value="D-LINK">D-Link</option>
                    <option value="MERCUSYS">Mercusys</option>
                    <option value="HUAWEI">Huawei</option>
                    <option value="FIBERHOME">Fiberhome</option>
                    <option value="UBIQUITI">Ubiquiti</option>
                    <option value="INTELBRAS">Intelbras</option>
                </select>
            </div>
            </Div>
            <Div>
                {roteadores && roteadores.map((roteador, index) => 
                    <CardRoteador 
                        key={index} 
                        dados={roteador}
                        handleModalOpen= {handleModalOpen}
                    />)}
            </Div>
        </>
    );
}