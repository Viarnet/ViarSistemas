import getContract from "../../utils/getContract.js";
import getCostumerID from '../../utils/getCostumerID.js'

export async function findContract(req, res) {
  try{
    let NomeCliente = req.params.nomeCliente;

    const IdCliente = await getCostumerID(NomeCliente);
    if(IdCliente){
        const IdContrato = await getContract(IdCliente);
        return res.status(200).json({IdContrato, IdCliente});
    }else return res.status(200).json({msg: "ERROR", status: 0});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
