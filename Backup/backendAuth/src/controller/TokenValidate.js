import { User } from "../models/User.js";

export class TokenValidate {
    async index(req, res){
        const user = await User.findOne({
            where: {email: req.body.email}
        });
        if(user){
            
            return res.json(user);
        }else return res.status(404).json({ error: "User not found!"});
        
    }

    
}