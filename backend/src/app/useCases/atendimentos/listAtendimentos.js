import { Atendimento } from '../../models/Atendimento.js';

export async function listAtendimentos(req, res) {
  try{
    const atendimentos = await Atendimento.find();

    res.json(atendimentos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
