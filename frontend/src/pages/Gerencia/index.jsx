import { React, useContext, useEffect, useState, PureComponent } from 'react';
import { CardRoteador, Div, Input, Graficos } from './styles';
import { Chart } from "react-google-charts";

import './styles.css'

import axios from 'axios';
import { SelectComponent } from '../../components/SelectComponent';
import { MiniLoading } from '../../components/MiniLoading';

const today = new Date();
let todayMonth = (today.getMonth() + 1).toString().padStart(2, 0);

export function Gerencia() {
    const [month, setMonth] = useState(todayMonth);
    const [relatorio, setRelatorio] = useState();
    const [TotalData, setTotalData] = useState([["Colaborador", "Total"]]);
    const [loading, setLoading] = useState(true);
    const [semAtendimentos, setSemAtendimentos] = useState(true);
  

    let mes = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
     ];
     
    let assuntos = [
        'Alteração de Titularidade',
        'Atribuir IP Fixo',
        'Belluno Resolvido',
        'Gerou visita',
        'Huggy',
        'Laudo Técnico',
        'Outros Setores',
        'Pós Belluno',
        'Pós O.S.',
        'Posição de O.S.',
        'Presencial',
        'Telefônicos - SAC',
        'Visita Técnica'
    ];

    useEffect(() => {
        setLoading(true);
        setTotalData([["Colaborador", "Total"]]);
        (async () => {
            await axios.get(`http://192.168.0.95:3333/relatorio/${month}`)
                .then(({ data }) => {
                    Object.keys(data.counts).forEach(colaborador => {
                        TotalData.push([colaborador, data.counts[colaborador]]);
                        setTotalData([...TotalData]);
                    });
                    if(data.total != 0){
                        setSemAtendimentos(false);
                        setRelatorio(data);
                        setLoading(false);
                    }else {
                        setLoading(false);
                        setSemAtendimentos(true);
                    }
                    
                })
        })()
    }, [month]);

    function handleChangeMonth(e) {
        setTotalData([["Colaborador", "Total"]]);
        setMonth(e.target.value);
    }

    var options = {
        backgroundColor: '#E4E9F7',
        'width': 600,
        'height': 400,
        is3D: true
    };
    return (
        <>
            <Div style={{ paddingBottom: '2rem', }}>
                <h1 style={{fontSize: '1.6rem'}}>Gerência</h1>
            </Div>
            <Div>
                <SelectComponent value={month} handleOnChange={e => handleChangeMonth(e)}>
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
            {loading && <MiniLoading />}
            {semAtendimentos && <Div style={{paddingTop: '10rem'}}><h4 style={{fontSize: '2rem'}}>Este mês ainda não possui atendimentos</h4></Div>}
            {!loading && relatorio && !semAtendimentos && <h4 style={{ marginLeft: 50, paddingTop: '2rem', fontSize: '1.5rem' }}>Atendimentos efetuados neste mês: {relatorio.total}</h4>}
            {!loading && !semAtendimentos && (<Graficos>
                {relatorio && <Chart
                    chartType="BarChart"
                    options={options}
                    data={TotalData}
                    legendToggle={true}


                />}
                {relatorio && <Chart
                    chartType='PieChart'
                    options={options}
                    data={TotalData}
                />}
            </Graficos>)}
            {!loading && !semAtendimentos && (<div className="parent">
                <div className="div1 relatorio-title">RELATORIO</div>
                <div className="div2 data">{mes[Number(month)-1]}</div>
                <div className="div3 assunto">{assuntos[0]}</div>
                <div className="div4 assunto">{assuntos[1]}</div>
                <div className="div5 assunto">{assuntos[2]}</div>
                <div className="div6 assunto">{assuntos[3]}</div>
                <div className="div7 assunto">{assuntos[4]}</div>
                <div className="div8 assunto">{assuntos[5]}</div>
                <div className="div9 assunto">{assuntos[6]}</div>
                <div className="div10 assunto">{assuntos[7]}</div>
                <div className="div11 assunto">{assuntos[8]}</div>
                <div className="div12 assunto">{assuntos[9]}</div>
                <div className="div13 assunto">{assuntos[10]}</div>
                <div className="div14 assunto">{assuntos[11]}</div>
                <div className="div15 assunto">{assuntos[12]}</div>
                <div className="header">RESUMO GERAL DOS ATENDIMENTOS</div>
                <div className="div17 dias">1</div>
                <div className="div18 dias">2</div>
                <div className="div19 dias">3</div>
                <div className="div20 dias">4</div>
                <div className="div21 dias">5</div>
                <div className="div22 dias">6</div>
                <div className="div23 dias">7</div>
                <div className="div24 dias">8</div>
                <div className="div25 dias">9</div>
                <div className="div26 dias">10</div>
                <div className="div27 dias">11</div>
                <div className="div28 dias">12</div>
                <div className="div29 dias">13</div>
                <div className="div30 dias">14</div>
                <div className="div31 dias">15</div>
                <div className="div32 dias">16</div>
                <div className="div33 dias">17</div>
                <div className="div34 dias">18</div>
                <div className="div35 dias">19</div>
                <div className="div36 dias">20</div>
                <div className="div37 dias">21</div>
                <div className="div38 dias">22</div>
                <div className="div39 dias">23</div>
                <div className="div40 dias">24</div>
                <div className="div41 dias">25</div>
                <div className="div42 dias">26</div>
                <div className="div43 dias">27</div>
                <div className="div44 dias">28</div>
                <div className="div45 dias">29</div>
                <div className="div46 dias">30</div>
                <div className="div47 dias">31</div>
                <div className="div48 assunto">TOTAL</div>
                <div className="bodyrelatorio">
                    {relatorio && relatorio.dados.map((dado)=> 
                        dado.map((d, index)=><p key={index}>{d}</p>)
                    )}
                </div>
            </div>)}
            <Div style={{paddingTop: '3rem'}}></Div>

        </>
    );
}
