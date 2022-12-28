import express from 'express';
import mongoose from 'mongoose';
import path,{ dirname } from 'node:path';
import { router } from './router.js';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

mongoose.connect('mongodb://viarnet:viar1851@localhost:27017/?authMechanism=DEFAULT')
  .then(()=>{
    const port = 3333;

    app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', '*');
      res.setHeader('Access-Control-Allow-Headers', '*');
      next();
    });
    app.use(express.json());
    app.use(router);
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.listen(3001, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((error)=> console.log(error,'Erro ao se conectar ao MongoDB'));


