import { Roteador } from '../../models/Roteador.js';

export async function listRoteadores(req, res) {
  try{
    const roteadores = await Roteador.find();

    res.json(roteadores);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
