import pkg from 'bcryptjs';
const { compare } = pkg;
import pkg2 from 'jsonwebtoken';
const { sign } = pkg2;
import 'dotenv/config';
import { User } from '../../models/User.js';

export async function AuthController(req, res) {
  try {
    const { email, password } = req.body;
        
    const user = await User.findOne({ where: { email }});

    if(!user){
        return res.json({ error: "User not found!"});
    }

    const isValuePassword = await compare(password, user.password);

    if(!isValuePassword){
        return res.json({ error: "Password invalid!" });
    }

    const token = sign({ id: user.id }, process.env.JWTTOKEN_SECRET, { expiresIn: "1d" });

    const { id, role, id_colaborador } = user;

    return res.json({ user: { id, email, role, id_colaborador }, token })
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
