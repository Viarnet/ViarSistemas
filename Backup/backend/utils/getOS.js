import axios from "axios";
import getNome from './getNome.js';
const token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';


async function getOS(id){
    
    let resultado = await axios.get('https://sistema.viartelecom.com.br/webservice/v1/su_oss_chamado', {
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
            ixcsoft: 'listar'
        },
        data:
        {
            'qtype': 'su_oss_chamado.id_assunto',
            'query': id,
            'oper': '=',
            'page': '1',
            'rp': '1000',
            'sortname': 'su_oss_chamado.id',
            'sortorder': 'desc'
        }
    }).then(async ({data})=> {
        let array = [];
        for (const os of data.registros) {
            if(os.id_assunto == id && os.status == 'A'){
                array.push({
                    id: os.id,
                    endereco: os.endereco,
                    nomeCliente: await getNome(os.id_cliente),
                    idSetor: os.setor,
                    idAssunto: os.id_assunto,
                    mensagem: os.mensagem,
                    isAdded: false
                })
            }
        }
        return array
    })

    return resultado
}

export default getOS