import axios from 'axios';
const token = '66:e5b6de1fb4f34f993f7783d572efb658fa9a51c032277e6ac794cc8cff300933';

async function getContract(id) {
    const arrayContratos = await axios.get("https://sistema.viartelecom.com.br/webservice/v1/cliente_contrato", {
        headers:
        {
            'Content-Type': 'application/json',
            Authorization: 'Basic ' + new Buffer.from(token).toString('base64'),
            ixcsoft: 'listar'
        },
        data:
        {         
            "qtype": "id_cliente",
            "query": id,
            "oper": "=",
            "page": "1",
            "rp": "20",
            "sortname": "id_cliente",
            "sortorder": "asc"
        }
    }).then((data)=>{
        let id = [];
        data.data.registros.forEach(contrato => {
            if(contrato.contrato != 'Watch Brasil - SVA' && contrato.contrato != 'VIARTV - SVA' && contrato.contrato != 'Assistência Premium - SVA'){
                if(contrato.status == 'A'){
                    id.push(contrato.id);
                }
            }
        });
        return id;
    })
    return arrayContratos;
}

export default getContract;