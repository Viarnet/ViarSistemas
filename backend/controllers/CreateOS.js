import insertOS from '../utils/insertOS.js'
import gerarProtocolo from '../utils/gerarProtocolo.js'


export default {
    async Create(req, res){

        let arrayContratos = req.body.arrayContratos;
        let mensagemPadraoAbertura = req.body.mensagemPadraoAbertura;
        let mensagemPadraoEncerra = req.body.mensagemPadraoEncerra;
        let idAtendente = req.body.idColaborador;
        const protocolo = await gerarProtocolo();
        console.log(protocolo)

        arrayContratos.forEach(async (contrato) => {
            const result = await insertOS(contrato.id, contrato.IdCliente, mensagemPadraoAbertura, mensagemPadraoEncerra, protocolo, idAtendente);
            console.log(result)
        });
        return res.status(200).json({message: 'Executado com sucesso'});
    }
}