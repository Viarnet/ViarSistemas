import { React, useContext, useEffect, useState } from 'react';
import { CardRoteador, Div, Input, Select } from './styles';
import axios from 'axios';

export function Gerencia() {
    const [month, setMonth] = useState("01");
    const [roteadores, setRoteadores] = useState();

    useEffect(() => {
        (async()=>{
            await axios.get("http://192.168.0.95:3333/roteadores")
            .then(({data})=>{
                setRoteadores(data);
            })
        })()
    }, [month]);

  return (
    <>
        <Div style={{paddingBottom: '2rem'}}>
            <h1>Gerência</h1>
        </Div>
        <Div>
            <Select value={month} onChange={e=>setMonth(e.target.value)}>
                <option>Selecione o Mês</option>
                <option value="01">Janeiro</option>
                <option value="02">Fevereiro</option>
                <option value="03">Março</option>
                <option value="04">Abril</option>
                <option value="05">Maio</option>
                <option value="06">Junho</option>
                <option value="07">Julho</option>
                <option value="08">Agosto</option>
                <option value="09">Setembro</option>
                <option value="10">Outubro</option>
                <option value="11">Novembro</option>
                <option value="12">Dezembro</option>
            </Select>
        </Div>
        {roteadores.map((roteador, index)=> (
            <CardRoteador key={index}>
                <img src={`http://192.168.0.95:3333/uploads/${roteador.imagePath}`}/>
                <h4>{roteador.nome}</h4>
                <p>{roteador.compatibilidade}</p>
                <p>{roteador.wan}</p>
                <p>{roteador.lan}</p>
                <p>{roteador.redeswifi}</p>
                <p>{roteador.cobertura2g}</p>
                <p>{roteador.cobertura5g}</p>
            </CardRoteador>
        ))}
    </>
  );
}
