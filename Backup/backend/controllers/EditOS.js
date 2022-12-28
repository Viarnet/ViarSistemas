import editOS from "../utils/editOS.js";

export default {
    async Edit(req, res){
        let arrayOS = req.body.arrayOS;
        let idTecnico = req.body.idTecnico;

        arrayOS.forEach(async os => {
            await editOS(os.id, os.idSetor, idTecnico, os.idAssunto, os.mensagem);
        });
        return res.status(200).json({message: 'Efetuado o encaminhamento'});
    }
}