import axios from 'axios';
import { React, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Div } from './style';
import { Card } from '../../components/Card';
import './style.css'

export function Atendimentos() {
  const auth = useContext(AuthContext);
  const [Atendimento , setAtendimento] = useState();
  const [AtendimentoValor , setAtendimentoValor] = useState();
  const [dataSelecionada, setDataSelecionada] = useState("2022-12-22");
  const [Res, setRes] = useState();
  let res;

  useEffect(() => {
    (async () => {
      await axios.get(`http://192.168.0.95:3333/atendimentos/${auth.user._id}`, {
        headers: {
          'Authorization': `Bearer ${auth.token1}`
        }
      }).then(async ({ data: Atendimento }) => {

        const AtendimentoExiste = Atendimento.filter(d => d.data == dataSelecionada);
        
        if (AtendimentoExiste.length == 0) {
          await axios.post('http://192.168.0.95:3333/atendimentos/create',{
            "data": dataSelecionada,
            "user": auth.user._id
          }).then(({ data }) => {
            let AtendimentosFiltrados = Object.entries(data).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v")
            setAtendimento(AtendimentosFiltrados)
          })
        }else{
          let AtendimentosFiltrados = Object.entries(AtendimentoExiste[0]).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v");
          setAtendimento(AtendimentosFiltrados)
        }
      })
    })()
  }, [])
  async function handleIncreaseAtendimento(index){
    
    console.log(index)
    // await axios.post('http://localhost:3333/atendimentos/create', {
    //   data: dataSelecionada,
    //   tipo,
    // }).then(({data})=>{
    //   setAtendimento(data)
    // })
  }
  async function handleDecreaseAtendimento(index){
    
    const tipo = String(Object.keys(Atendimento)[index]);

    await axios.post('http://localhost:3333/atendimentos/create', {
      data: dataSelecionada,
    }).then(({data})=>{
      setAtendimento(data)
    })
  }
  

  // const soma = Atendimento.alteracaodetitularidade + Atendimento.atribuiripfixo + Atendimento.bellunoresolvido +
  //  Atendimento.gerouvisita + Atendimento.huggy + + Atendimento.outrossetores + + Atendimento.posbelluno + 
  //  Atendimento.posos  + Atendimento.laudotecnico + Atendimento.posicaodeos + + Atendimento.presencial + 
  //  Atendimento.telefonicossac + Atendimento.visitatecnica;

  
  return (
    <>
      <Div style={{paddingBottom: '2rem'}}>
        <h1>Atendimentos</h1>
      </Div>
      <Div>
        <input type="date" onChange={(e) => {setDataSelecionada(e)}} />
      </Div>
      <Div>
        {Atendimento && Atendimento.map((tipo, index)=> 
          <Card tipo={tipo[0]} 
          valor={tipo[1]}
          index={index}
          handleOnClickIncrease={handleIncreaseAtendimento} 
          handleOnClickDecrease={handleDecreaseAtendimento} 
          key={index}/>
        )}
      </Div>
    </>
  );
}



