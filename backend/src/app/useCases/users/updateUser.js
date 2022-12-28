import { User } from '../../models/User.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

export async function updateUser(req, res) {
  try {
    const { name, email, role, password, id_colaborador } = req.body;
    if(email){
      let UpdatedRows = {}
      if(password){ 
          const hash_password = await hash(password, 8);
          UpdatedRows.password = hash_password;
      }
      if(name){UpdatedRows.name = name}
      if(role){UpdatedRows.role = Number(role)}
      if(id_colaborador){UpdatedRows.id_colaborador = id_colaborador}

      const user = await User.findOneAndUpdate({email}, UpdatedRows);
      if(user){
        const users = await User.find();
        return res.json({ users });
      }else return res.json({ error: "Usuario não encontrado!" });
      
      
    }else return res.json({ error: "Infome o Email do Usuario!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
