
import { Atendimento } from '../../models/Atendimento.js';

export async function relatorioMensal(req, res) {
  try{
    const { data } = req.params;
    const atendimentos = await Atendimento.find({data: new RegExp("-"+data+"-", "i")}).populate('user');;
    
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
      if (atendimentos[i].user.name in counts){
        counts[atendimentos[i].user.name]+= total;
      }else counts[atendimentos[i].user.name] = total;
    }
    const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);
   
    res.json({total: sumValues(counts),counts,atendimentos});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
