
import { Atendimento } from '../../models/Atendimento.js';

export async function listAtendimentosByUser(req, res) {
  try{
    const { userId } = req.params;
    const atendimentos = await Atendimento.find().where('user').equals(userId);
    res.json(atendimentos);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
