import axios from 'axios';
import { React, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/Auth/AuthContext';
import { Div, Input  } from './style';
import { Card } from '../../components/Card';
import './style.css'
import { MiniLoading } from '../../components/MiniLoading';
const data = new Date;
const DataAtual = data.toISOString().split('T')[0];

export function Atendimentos() {
  const auth = useContext(AuthContext);
  const [Atendimento, setAtendimento] = useState();
  const [TotalAtendimentos, setTotalAtendimentos] = useState(0);
  const [dataSelecionada, setDataSelecionada] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    if (!dataSelecionada) {
      setDataSelecionada(DataAtual);
    } else {
      (async () => {
        await axios.get(`http://192.168.0.95:3333/atendimentos/${auth.user._id}`, {
          headers: {
            'Authorization': `Bearer ${auth.token1}`
          }
        }).then(async ({ data: Atendimento }) => {

          const AtendimentoExiste = Atendimento.filter(d => d.data == dataSelecionada);

          if (AtendimentoExiste.length == 0) {
            await axios.post('http://192.168.0.95:3333/atendimentos/create', {
              "data": dataSelecionada,
              "user": auth.user._id
            }).then(({ data }) => {
              let AtendimentosFiltrados = Object.entries(data).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v")
              setAtendimento(AtendimentosFiltrados);
              const soma = AtendimentosFiltrados.reduce((accumulator, object) => {
                return accumulator + object[1];
              }, 0);
              setTotalAtendimentos(soma)
              setIsLoading(false)
            })
          } else {
            let AtendimentosFiltrados = Object.entries(AtendimentoExiste[0]).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v");
            setAtendimento(AtendimentosFiltrados)
            const soma = AtendimentosFiltrados.reduce((accumulator, object) => {
              return accumulator + object[1];
            }, 0);
            setTotalAtendimentos(soma)
            setIsLoading(false)
              
          }
        })
      })()
      
    }
  }, [dataSelecionada,TotalAtendimentos]);

  async function handleIncreaseAtendimento(index) {
    let body;
    switch (index) {
      case 0:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          alteracaodetitularidade: Atendimento[index][1] + 1,
        }
        break;
      case 1:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          atribuiripfixo: Atendimento[index][1] + 1,
        }
        break;
      case 2:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          bellunoresolvido: Atendimento[index][1] + 1,
        }
        break;
      case 3:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          gerouvisita: Atendimento[index][1] + 1,
        }
        break;
      case 4:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          huggy: Atendimento[index][1] + 1,
        }
        break;
      case 5:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          laudotecnico: Atendimento[index][1] + 1,
        }
        break;
      case 6:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          outrossetores: Atendimento[index][1] + 1,
        }
        break;
      case 7:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posbelluno: Atendimento[index][1] + 1,
        }
        break;
      case 8:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posos: Atendimento[index][1] + 1,
        }
        break;
      case 9:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posicaodeos: Atendimento[index][1] + 1,
        }
        break;
      case 10:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          presencial: Atendimento[index][1] + 1,
        }
        break;
      case 11:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          telefonicossac: Atendimento[index][1] + 1,
        }
        break;
      case 12:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          visitatecnica: Atendimento[index][1] + 1,
        }
        break;
    }
    if (body) {
      await axios.post('http://192.168.0.95:3333/atendimentos/create', body).then(({ data }) => {
        let AtendimentosFiltrados = Object.entries(data).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v")
        setAtendimento(AtendimentosFiltrados)
        const soma = AtendimentosFiltrados.reduce((accumulator, object) => {
          return accumulator + object[1];
        }, 0);
        setTotalAtendimentos(soma)
      })
    }


  }


  async function handleDecreaseAtendimento(index) {
    let body;
    if(Atendimento[index][1] - 1 < 0 ){

    }else{
      switch (index) {
        case 0:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          alteracaodetitularidade: Atendimento[index][1] - 1,
        }
        break;
      case 1:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          atribuiripfixo: Atendimento[index][1] - 1,
        }
        break;
      case 2:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          bellunoresolvido: Atendimento[index][1] - 1,
        }
        break;
      case 3:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          gerouvisita: Atendimento[index][1] - 1,
        }
        break;
      case 4:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          huggy: Atendimento[index][1] - 1,
        }
        break;
      case 5:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          laudotecnico: Atendimento[index][1] - 1,
        }
        break;
      case 6:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          outrossetores: Atendimento[index][1] - 1,
        }
        break;
      case 7:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posbelluno: Atendimento[index][1] - 1,
        }
        break;
      case 8:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posos: Atendimento[index][1] - 1,
        }
        break;
      case 9:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          posicaodeos: Atendimento[index][1] - 1,
        }
        break;
      case 10:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          presencial: Atendimento[index][1] - 1,
        }
        break;
      case 11:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          telefonicossac: Atendimento[index][1] - 1,
        }
        break;
      case 12:
        body = {
          data: dataSelecionada,
          user: auth.user._id,
          visitatecnica: Atendimento[index][1] - 1,
        }
        break;
      }
      if (body) {
        await axios.post('http://192.168.0.95:3333/atendimentos/create', body).then(({ data }) => {
          let AtendimentosFiltrados = Object.entries(data).filter(a => a[0] != "_id" && a[0] != "data" && a[0] != "user" && a[0] != "__v")
          setAtendimento(AtendimentosFiltrados)
          const soma = AtendimentosFiltrados.reduce((accumulator, object) => {
            return accumulator + object[1];
          }, 0);
          setTotalAtendimentos(soma)
        })
      }
    }
  }


  return (
    <>
    {isLoading && <MiniLoading/>}
      <Div style={{ paddingBottom: '1rem'}}>
        <h1>Atendimentos</h1>
      </Div>
      <Div style={{ paddingBottom: '1rem' }}>
        <Input type="date"
          value={dataSelecionada}
          onChange={(e) => { setDataSelecionada(e.target.value) }}
        />
      </Div>
      <Div>
        {Atendimento && Atendimento.map((tipo, index) =>
          <Card tipo={tipo[0]}
            valor={tipo[1]}
            index={index}
            handleOnClickIncrease={handleIncreaseAtendimento}
            handleOnClickDecrease={handleDecreaseAtendimento}
            key={index} />
        )}
        <Card
            valor={TotalAtendimentos}
            key={TotalAtendimentos+"b"} />
      </Div>
    </>
  );
}



