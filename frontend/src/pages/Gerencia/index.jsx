import { React, useContext, useEffect, useState, PureComponent } from 'react';
import { CardRoteador, Div, Input, Graficos } from './styles';
import { Chart } from "react-google-charts";

import axios from 'axios';
import { SelectComponent } from '../../components/SelectComponent';

const today = new Date();
let todayMonth = (today.getMonth() + 1).toString().padStart(2, 0);


export function Gerencia() {
    const [month, setMonth] = useState(todayMonth);
    const [relatorio, setRelatorio] = useState();
    const [TotalData, setTotalData] = useState([["Colaborador", "Atendimentos"]]);


    useEffect(() => {
        setTotalData([["Colaborador", "Atendimentos"]]);
        (async () => {
            await axios.get(`http://192.168.0.95:3333/relatorio/${month}`)
                .then(({ data }) => {
                    Object.keys(data.counts).forEach(colaborador => {
                        TotalData.push([colaborador,  data.counts[colaborador]]);
                        setTotalData([...TotalData]);
                    });
                    setRelatorio(data);
                })
        })()
    }, [month]);

    function handleChangeMonth(e){
        setTotalData([["Colaborador", "Atendimentos"]]);
        setMonth(e.target.value)
    }
    
    var options = {
        backgroundColor: '#E4E9F7',
        'width': 600,
        'height':400,
        is3D: true
    };
    return (
        <>
            <Div style={{ paddingBottom: '2rem', }}>
                <h1>Gerência</h1>
            </Div>
            <Div>
                <SelectComponent value={month} handleOnChange={e => handleChangeMonth(e)}>
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
            {relatorio && <h4 style={{marginLeft: 50}}>Total de Atendimentos no Mês: {relatorio.total}</h4>}
            <Graficos>            
            {relatorio && <Chart
                chartType="BarChart"
                options={options}
                data={TotalData}
            />}
            {relatorio && <Chart
                chartType='PieChart'
                options={options}
                data={TotalData}
            />}
            </Graficos>
        </>
    );
}
