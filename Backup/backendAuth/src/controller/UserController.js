import pkg from 'bcryptjs';
const { hash } = pkg;
import { User } from "../models/User.js";


export class UserController {
    async index(req, res){
        const users = await User.findAll();
        return res.json({ users })
    }

    async user(req, res){
        const user = await User.findOne({where:{email: req.params.email}});
        return res.json({ user })
    }

    async delete(req, res){
        
        await User.destroy({where: {
            email: req.params.email
        }});
        const users = await User.findAll();
        return res.json({ users })
    }

    async store(req, res){
        const { name, email, role, password, id_colaborador } = req.body;

        const userExists = await User.findOne({ where: { email }});

        if(userExists){
            return res.json({ error: "User exists" });
        }

        const hash_password = await hash(password, 8)
        const user = await User.create({
                name, 
                email,
                role,
                id_colaborador,
                password: hash_password,
        });

        return res.json({ user })
    }

    async update(req, res){
        const { name, email, role, password, id_colaborador } = req.body;
        let UpdatedRows = {}
        if(password){ 
            const hash_password = await hash(password, 8);
            UpdatedRows.password = hash_password;
        }
        if(name){UpdatedRows.name = name}
        if(role){UpdatedRows.role = Number(role)}
        if(id_colaborador){UpdatedRows.id_colaborador = id_colaborador}

        const user = await User.update(UpdatedRows,{ where: { email }});
        const users = await User.findAll();
        
        return res.json({ users })
    }
}