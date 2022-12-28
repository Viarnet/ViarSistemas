import { Atendimento } from "../../models/Atendimento.js";
import { User } from "../../models/User.js";


export async function deleteUser(req, res) {
  try{
    const { email } = req.params;
    if(email){
      const user = await User.findOneAndRemove({email});
      if(user){
        const atendimentos = await Atendimento.deleteMany({user: user.id});
        const users = await User.find();
        return res.status(200).json({message: "Usuario e Atendimentos removido com sucesso!", users});
      }else return res.status(400).json({ error: "Usuario não encontrado!" });
    }else return res.status(400).json({ error: "Informe o Email do Usuario!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
