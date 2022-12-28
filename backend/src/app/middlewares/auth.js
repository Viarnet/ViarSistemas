import pkg from 'jsonwebtoken';
const { verify } = pkg;
import 'dotenv/config';

export function AuthMiddlewares(
    req,
    res,
    next
){
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).json({ error: "Token não informado!" });
    }

    const [, token] = authorization.split(" ");
    
    try {
      const decoded = verify(token, process.env.JWTTOKEN_SECRET);
      const { id } = decoded;

      req.userId = id;
      next();
    } catch (error) {
        return res.status(401).json({ error: "Token invalido!" });
    }
}
