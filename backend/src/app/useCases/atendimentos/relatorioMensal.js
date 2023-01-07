
import { Atendimento } from '../../models/Atendimento.js';

export async function relatorioMensal(req, res) {
  try{
    const { data } = req.params;
    const atendimentos = await Atendimento.find({data: new RegExp("-"+data+"-", "i")}).populate('user');;
    let dados=[];
    let atual=[];
    for (let index = 0; index < 416; index++) {
        atual.push(0);
        if(atual.length == 32){
            dados.push(atual);
            atual = [];
        }       
    }

    let counts = {};
    for (var i=0; i < atendimentos.length; i++){
      let total = 
        atendimentos[i].alteracaodetitularidade + 
        atendimentos[i].atribuiripfixo +
        atendimentos[i].bellunoresolvido +
        atendimentos[i].gerouvisita +
        atendimentos[i].huggy +
        atendimentos[i].laudotecnico +
        atendimentos[i].outrossetores +
        atendimentos[i].posbelluno +
        atendimentos[i].posos +
        atendimentos[i].posicaodeos +
        atendimentos[i].presencial +
        atendimentos[i].telefonicossac +
        atendimentos[i].visitatecnica;

        dados[0][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].alteracaodetitularidade;
        dados[1][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].atribuiripfixo;
        dados[2][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].bellunoresolvido;
        dados[3][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].gerouvisita;
        dados[4][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].huggy;
        dados[5][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].laudotecnico;
        dados[6][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].outrossetores;
        dados[7][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].posbelluno;
        dados[8][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].posos;
        dados[9][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].posicaodeos;
        dados[10][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].presencial;
        dados[11][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].telefonicossac;
        dados[12][Number(atendimentos[i].data.split("-")[2]-1)] += atendimentos[i].visitatecnica;
        
        
        dados[0][31] += atendimentos[i].alteracaodetitularidade;
        dados[1][31] += atendimentos[i].atribuiripfixo;
        dados[2][31] += atendimentos[i].bellunoresolvido;
        dados[3][31] += atendimentos[i].gerouvisita;
        dados[4][31] += atendimentos[i].huggy;
        dados[5][31] += atendimentos[i].laudotecnico;
        dados[6][31] += atendimentos[i].outrossetores;
        dados[7][31] += atendimentos[i].posbelluno;
        dados[8][31] += atendimentos[i].posos;
        dados[9][31] += atendimentos[i].posicaodeos; 
        dados[10][31] += atendimentos[i].presencial; 
        dados[11][31] += atendimentos[i].telefonicossac;
        dados[12][31] += atendimentos[i].visitatecnica;


      if (atendimentos[i].user.name in counts){
        counts[atendimentos[i].user.name]+= total;
      }else counts[atendimentos[i].user.name] = total;
    }
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
   

    
    










    res.json({total: sumValues(counts),counts,dados,atendimentos});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
