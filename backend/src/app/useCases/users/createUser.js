import { User } from '../../models/User.js';
import pkg from 'bcryptjs';
const { hash } = pkg;

export async function createUser(req, res) {
  try {
    const { name, email, password, role, id_colaborador } = req.body;

    if(!name || !email || !password || !role || !id_colaborador){
      return res.status(400).json({
        error: 'Por favor, informe todos os campos!',
      });
    }

    const userExists = await User.findOne({ email });
    console.log(userExists)

    if(userExists){
        return res.json({ error: "O usuario já existe!" });
    }
    const hash_password = await hash(password, 8)
    const user = await User.create({ name, email, password: hash_password, role, id_colaborador });

    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
