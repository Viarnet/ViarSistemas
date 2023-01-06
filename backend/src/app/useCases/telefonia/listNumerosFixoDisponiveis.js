import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});
let planilha_telefoniafixa = "139MHb0BdFk6A6HwpNSZLM9HdKPXfbw7zaw8Hfjfj1ow";



export async function listNumerosFixoDisponiveis(req, res) {

  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });

    if (req.params.cidade == "MEDIANEIRA") {
      let numeros_disponiveis = []
      let disponiveis = 0;
      await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: planilha_telefoniafixa,
        range: "Medianeira",
      }).then((planilha) => {

        for (let index = 2; index < 337; index++) {
          const numero = planilha.data.values[index][7];
          const cliente = planilha.data.values[index][8];
          if (cliente.length < 2) {
            if (numero) {
              numeros_disponiveis.push(numero);
              disponiveis++
            }
          }

        }
      })
      return res.json({ disponiveis, numeros_disponiveis })
    }
    if (req.params.cidade == "MATELANDIA") {
      let numeros_disponiveis = [];
      let disponiveis = 0;
      await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: planilha_telefoniafixa,
        range: "Matelandia",
      }).then((planilha) => {
        for (let index = 2; index < 55; index++) {
          const numero = planilha.data.values[index][7];
          const cliente = planilha.data.values[index][8];
          if (cliente.length < 2) {
            if (numero) {
              numeros_disponiveis.push(numero);
              disponiveis++
            }
          }

        }
      })
      return res.json({ disponiveis, numeros_disponiveis })
    }
    if (req.params.cidade == "CEU AZUL") {
      let numeros_disponiveis = []
      let disponiveis = 0;
      await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: planilha_telefoniafixa,
        range: "Céu Azul",
      }).then((planilha) => {

        for (let index = 2; index < 32; index++) {
          const numero = planilha.data.values[index][7];
          const cliente = planilha.data.values[index][8];
          if (cliente.length < 5) {
            if (numero) {
              numeros_disponiveis.push(numero);
              disponiveis++
            }
          }

        }
      })
      return res.json({ disponiveis, numeros_disponiveis })
    }
    if (req.params.cidade == "SAO MIGUEL") {
      let numeros_disponiveis = []
      let disponiveis = 0;
      await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId: planilha_telefoniafixa,
        range: "Sao Miguel",
      }).then((planilha) => {

        for (let index = 1; index < 52; index++) {
          const numero = planilha.data.values[index][7];
          const cliente = planilha.data.values[index][8];
          if (cliente) {
            if (cliente.length < 2) {
              if (numero) {
                numeros_disponiveis.push(numero);
                disponiveis++
              }
            }
          }


        }
      })
      return res.json({ disponiveis, numeros_disponiveis })
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
