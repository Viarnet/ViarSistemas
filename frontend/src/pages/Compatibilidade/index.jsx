import { React, useState, useEffect, useContext } from 'react';
import { Div, Input } from './styles';
import { AuthContext } from "../../contexts/Auth/AuthContext";
import { ModalComponent } from './../../components/ModalComponent';
import { CardRoteador } from '../../components/CardRoteador';
import axios from 'axios';
import { SelectComponent } from '../../components/SelectComponent';

export function Compatibilidade() {

    const auth = useContext(AuthContext);

    const [roteadores, setRoteadores] = useState();
    const [marca, setMarca] = useState("TP-LINK");
    const [isTitle, setIsTitle] = useState("");
    const [isBody, setIsBody] = useState();
    const [term, setTerm] = useState("");
    

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
            <img src={`http://192.168.0.95:3333/uploads/${dados.imagePath}`} style={{width: 200, height: 220}}/>
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
                <SelectComponent value={marca} handleOnChange={e => setMarca(e.target.value)}>
                    <option value="TP-LINK">TP-Link</option>
                    <option value="D-LINK">D-Link</option>
                    <option value="MERCUSYS">Mercusys</option>
                    <option value="HUAWEI">Huawei</option>
                    <option value="FIBERHOME">Fiberhome</option>
                    <option value="UBIQUITI">Ubiquiti</option>
                    <option value="INTELBRAS">Intelbras</option>
                    <option value="XIAOMI">Xiaomi</option>
                    <option value="MULTILASER">Multilaser</option>
                    <option value="MIKROTIK">Mikrotik</option>
                </SelectComponent>
            </Div>
            <Div style={{paddingLeft: '50rem'}}>
                <Input type={'text'} placeholder='Pesquisar' onChange={(e) => {setTerm(e.target.value)}}></Input>
            </Div>
            <Div>
                {roteadores && roteadores.filter((val)=>{
                    if(term == ""){
                        return val;
                    }else if (val.nome.toLowerCase().includes(term.toLowerCase())){
                        return val
                    }
                    }).map((roteador, index) => 
                    <CardRoteador 
                        key={index} 
                        dados={roteador}
                        handleModalOpen= {handleModalOpen}
                    />)}
            </Div>
        </>
    );
}