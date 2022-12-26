import express from 'express';
import GetContract from './controllers/GetContract.js';
import GetOrder from './controllers/GetOrder.js'
import CreateOS from './controllers/CreateOS.js';
import cors from 'cors';
const port = 3000;

const app = express();

app.use(cors())

app.use(express.json());

app.get('/os/getcontracts/:nomeCliente', GetContract.GetContract);

app.get('/os/getOS/:assunto', GetOrder.GetOrder)

app.post('/os/create', CreateOS.Create);

app.listen(port, () => {
  console.log(`🚀 Api running in http://localhost:${port}`)
})
