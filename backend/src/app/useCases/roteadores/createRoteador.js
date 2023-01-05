import { Roteador } from '../../models/Roteador.js';

export async function createRoteador(req, res) {
  try {
    const imagePath = req.file?.filename;


    const {
      nome,
      marca,
      compatibilidade,
      wan,
      lan,
      redeswifi,
      cobertura2g,
      cobertura5g,
    } = req.body;


    const roteado = await Roteador.findOneAndUpdate({nome},{
      nome,
      marca,
      compatibilidade,
      wan,
      lan,
      redeswifi,
      cobertura2g,
      cobertura5g,
      imagePath
    },{
      new: true
    });

    if (roteado) {
      return res.status(201).json(roteado);
    } else {
      const roteado2 = await Roteador.create({
        nome,
        marca,
        compatibilidade,
        wan,
        lan,
        redeswifi,
        cobertura2g,
        cobertura5g,
        imagePath
      });
      return res.status(201).json(roteado2);
    }


  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
