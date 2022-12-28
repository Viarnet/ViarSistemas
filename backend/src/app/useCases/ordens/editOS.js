import editOS from "../../utils/editOS.js";

export async function editOS(req, res) {
  try{
    let arrayOS = req.body.arrayOS;
    let idTecnico = req.body.idTecnico;

    arrayOS.forEach(async os => {
        await editOS(os.id, os.idSetor, idTecnico, os.idAssunto, os.mensagem);
    });
    return res.status(200).json({message: 'Ordem de Serviço encaminhada com Sucesso!'});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
