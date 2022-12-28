import axios from "axios";
const token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';

async function editOS(idOS, idSetor, idTecnico, idAssunto, mess){
    const aa = await axios.post('https://sistema.viartelecom.com.br/webservice/v1/su_oss_chamado_alterar_setor', {
            'id_chamado': idOS,
            'id_setor': idSetor,
            'id_tecnico': idTecnico,
            'id_assunto': idAssunto,
            'mensagem': mess,
            'status': 'AG',
        }, {
            headers:{
                'Content-Type': 'application/json',
                Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
            }
    })
    console.log(aa);
}

export default editOS;