
import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  keyFile: "credentials.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets"
});
let planilha_telefoniamovel = "14qYQLMhz6tH6SM73VkOw2czU6-YDZynKms-sKJc1TmE";

export async function listPortabilidadesMovel(req, res) {
  try {
    const client = await auth.getClient();
    const googleSheets = google.sheets({ version: "v4", auth: client });
    let portabilidades = [];

    await googleSheets.spreadsheets.values.get({
      auth,
      spreadsheetId: planilha_telefoniamovel,
      range: "Movel",
    }).then((planilha) => {
      for (let index = 2; index < planilha.data.values.length; index++) {
        const numero = planilha.data.values[index][7];
        const prev = planilha.data.values[index][6];
        const city = planilha.data.values[index][2];
        const cliente = planilha.data.values[index][0];
        const data = planilha.data.values[index][10];
        if (prev == "Previsão") {
          portabilidades.push({ cidade: city.toUpperCase(), numero, cliente, data })
        }

      }
    })
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
