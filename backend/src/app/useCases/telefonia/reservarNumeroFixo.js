
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});
let planilha_telefoniafixa = "139MHb0BdFk6A6HwpNSZLM9HdKPXfbw7zaw8Hfjfj1ow";

export async function reservarNumeroFixo(req, res) {
  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
     
        let dados = {
            'values': [
                [
                    `${req.params.reserva.toUpperCase()} - RESERVADO(${req.params.vendedor.toUpperCase()})`,
                ]
            ]
        };

        let cidade;
            switch (req.params.cidade) {
                case "CEU AZUL":
                    cidade = "Céu Azul";
                    break;
                case "MEDIANEIRA":
                    cidade = "Medianeira";
                    break;
                case "MATELANDIA":
                    cidade = "Matelandia";
                    break;
                case "SAO MIGUEL":
                    cidade = "Sao Miguel";
                    break;        
                default:
                    break;
            }


        let range;
        await googleSheets.spreadsheets.values.get({
            auth,
            spreadsheetId: planilha_telefoniafixa,
            range: cidade,
        }).then(({data}) => {
            for (let index = 0; index < data.values.length; index++) {
                const element = data.values[index];
                if(element[7] == req.params.numero){
                    range = index +1;
                }
            }
        });
        if(range){
            await googleSheets.spreadsheets.values.update({
                auth,
                spreadsheetId: planilha_telefoniafixa,
                range: `${cidade}!I${range}`,
                valueInputOption: "USER_ENTERED",
                resource: {
                    values: dados.values
                }
            }).then((planilha) => {
                console.log(`${req.params.numero} ${req.params.reserva.toUpperCase()} - RESERVADO(${req.params.vendedor.toUpperCase()})`)
                res.send(`${req.params.numero} ${req.params.reserva.toUpperCase()} - RESERVADO(${req.params.vendedor.toUpperCase()})`);
            })
        }

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
