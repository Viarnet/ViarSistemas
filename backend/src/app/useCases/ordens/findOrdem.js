import getOS from "../../utils/getOS.js";

export async function findOrdem(req, res) {
  try{
    let assunto = req.params.assunto;
    const ordem = await getOS(assunto);
    return res.status(200).json({ordem})
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
