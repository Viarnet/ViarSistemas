import insertOS from '../../utils/insertOS.js'
import gerarProtocolo from '../../utils/gerarProtocolo.js'


export async function createOS(req, res) {
  try{

    let arrayContratos = req.body.arrayContratos;
    let mensagemPadraoAbertura = req.body.mensagemPadraoAbertura;
    let mensagemPadraoEncerra = req.body.mensagemPadraoEncerra;
    let idAtendente = req.body.idColaborador;
    const protocolo = await gerarProtocolo();

    arrayContratos.forEach(async (contrato) => {
        const result = await insertOS(contrato.id, contrato.IdCliente, mensagemPadraoAbertura, mensagemPadraoEncerra, protocolo, idAtendente);
    });
    return res.status(200).json({message: 'Ordem de Serviço criada com Sucesso!'});
    
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
