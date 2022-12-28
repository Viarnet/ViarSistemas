import { Atendimento } from '../../models/Atendimento.js';

export async function createAtendimento(req, res) {
  try{

    

    const { 
      data,
      alteracaodetitularidade,
      atribuiripfixo,
      bellunoresolvido,
      gerouvisita,
      huggy,
      laudotecnico,
      outrossetores,
      posbelluno,
      posos,
      posicaodeos,
      presencial,
      telefonicossac,
      visitatecnica,
      user
     } = req.body;


      const atendimento = await Atendimento.findOneAndUpdate({data},{
        data,
        alteracaodetitularidade,
        atribuiripfixo,
        bellunoresolvido,
        gerouvisita,
        huggy,
        laudotecnico,
        outrossetores,
        posbelluno,
        posos,
        posicaodeos,
        presencial,
        telefonicossac,
        visitatecnica,
        user
      },{
        new: true
      });

      if(atendimento){
        return res.status(201).json(atendimento);
      }else {
        const atendimento2 = await Atendimento.create({
          data,
          alteracaodetitularidade,
          atribuiripfixo,
          bellunoresolvido,
          gerouvisita,
          huggy,
          laudotecnico,
          outrossetores,
          posbelluno,
          posos,
          posicaodeos,
          presencial,
          telefonicossac,
          visitatecnica,
          user
        });
        return res.status(201).json(atendimento2);
      }
      
    
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
