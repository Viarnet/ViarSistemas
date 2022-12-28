import { User } from "../../models/User.js";


export async function listUser(req, res) {
  try{
    const { email } = req.params;
    if(email){
      const user = await User.find({email});
      if(user){
        return res.json({ user });
      }else return res.status(400).json({ error: "Usuario não encontrado!" });
    }else return res.status(400).json({ error: "Informe o Email do Usuario!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
