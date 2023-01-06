
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});
let planilha_telefoniafixa = "139MHb0BdFk6A6HwpNSZLM9HdKPXfbw7zaw8Hfjfj1ow";
let cidades = ['Medianeira', 'Matelandia', 'Céu Azul', 'Sao Miguel'];

export async function listPortabilidadesFixa(req, res) {
  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    let portabilidades = [];



    for (let index = 0; index < cidades.length; index++) {
      const cidade = cidades[index];

      await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: planilha_telefoniafixa,
        range: cidade,
      }).then((planilha) => {
        for (let index = 2; index < planilha.data.values.length; index++) {
          const numero = planilha.data.values[index][7];
          const prev = planilha.data.values[index][9];
          const cliente = planilha.data.values[index][8];
          const data = planilha.data.values[index][11];
          if (prev == "Previsão") {
            portabilidades.push({ cidade: cidade.toUpperCase(), numero, cliente, data })
          }
        }
      })
    }
    portabilidades.sort(function (a, b) {
      if (a.data < b.data) return -1;
      if (a.data > b.data) return 1;
      return 0;
    });
    
    return res.status(200).json(portabilidades);

  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
