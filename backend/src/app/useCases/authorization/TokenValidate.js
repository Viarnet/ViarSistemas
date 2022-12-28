import { User } from "../../models/User.js";


export async function TokenValidate(req, res) {
  try {
    if(req.body.email){
      const user = await User.findOne({email: req.body.email});
      if(user){
          
          return res.json(user);
      }else return res.status(404).json({ error: "Usuario não existe!"});
    }else return res.status(404).json({ error: "Informe o Email do Usuario!"});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
