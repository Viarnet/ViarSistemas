import { Roteador } from '../../models/Roteador.js';

export async function listRoteadoresByMarca(req, res) {
  try{
    const { marca } = req.params;
    const roteadores = await Roteador.find().where('marca').equals(marca);
    res.json(roteadores);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
