import getOS from "../utils/getOS.js";

export default {
    async GetOrder(req, res){
        let assunto = req.params.assunto;
        const ordem = await getOS(assunto);
        return res.status(200).json({ordem})
    }
} 