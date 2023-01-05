import { React, useContext, useEffect, useState, PureComponent } from 'react';
import { CardRoteador, Div, Input, Select } from './styles';
import { Chart } from "react-google-charts";

import axios from 'axios';
import { SelectComponent } from '../../components/SelectComponent';

const today = new Date();
let todayMonth = (today.getMonth() + 1).toString().padStart(2, 0);


export function Gerencia() {
    const [month, setMonth] = useState(todayMonth);
    const [relatorio, setRelatorio] = useState();

    const TotalData = [
        ["Colaborador", "Atendimentos"],
        ["MATHEUS", 10],


    ];


    useEffect(() => {
        (async () => {
            await axios.get(`http://192.168.0.95:3333/relatorio/${month}`)
                .then(({ data }) => {
                    Object.keys(data.counts).forEach(colaborador => {
                        TotalData.push([colaborador,  data.counts[colaborador]]) 
                    });
                    setRelatorio(data);
                })
        })()
    }, [month]);

    return (
        <>
            <Div style={{ paddingBottom: '2rem', }}>
                <h1>Gerência</h1>
            </Div>
            <Div>
                <SelectComponent value={month} handleOnChange={e => setMonth(e.target.value)}>
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
                </SelectComponent>
            </Div>
            {relatorio && <h3>Total de Atendimentos no Mês: {relatorio.total}</h3>}
            {relatorio && Object.keys(relatorio.counts).map((colaborador)=> <h3>{colaborador}: {relatorio.counts[colaborador]}</h3>)}
            {relatorio && <Chart
                chartType="Bar"
                width="500px"
                height="400px"
                data={TotalData}
            />}
        </>
    );
}
