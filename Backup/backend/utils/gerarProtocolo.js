import axios from "axios";
let token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';

async function gerarProtocolo() {
    const PROTOCOLO = await axios.get("https://sistema.viartelecom.com.br/webservice/v1/gerar_protocolo_atendimento", {
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
        },
        data:
        {
        }
    }).then(({data}) => {
        return String(data)
    });

    return PROTOCOLO
}


export default gerarProtocolo;