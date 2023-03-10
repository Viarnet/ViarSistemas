import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import { v4 as uuidv4 } from 'uuid';

import { AuthMiddlewares } from './app/middlewares/auth.js';
import { createAtendimento } from './app/useCases/atendimentos/createAtendimento.js';
import { listAtendimentos } from './app/useCases/atendimentos/listAtendimentos.js';
import { listAtendimentosByUser } from './app/useCases/atendimentos/listAtendimentosByUser.js';
import { relatorioMensal } from './app/useCases/atendimentos/relatorioMensal.js';
import { AuthController } from './app/useCases/authorization/AuthController.js';
import { TokenValidate } from './app/useCases/authorization/TokenValidate.js';
import { createOS } from './app/useCases/ordens/createOS.js';
import { findContract } from './app/useCases/ordens/findContract.js';
import { findOrdem } from './app/useCases/ordens/findOrdem.js';
import { createRoteador } from './app/useCases/roteadores/createRoteador.js';
import { listRoteadores } from './app/useCases/roteadores/listRoteadores.js';
import { listRoteadoresByMarca } from './app/useCases/roteadores/listRoteadoresByMarca.js';
import { listNumerosFixoDisponiveis } from './app/useCases/telefonia/listNumerosFixoDisponiveis.js';
import { listPortabilidadesFixa } from './app/useCases/telefonia/listPortabilidadesFixa.js';
import { listPortabilidadesMovel } from './app/useCases/telefonia/listPortabilidadesMovel.js';
import { reservarNumeroFixo } from './app/useCases/telefonia/reservarNumeroFixo.js';
import { createUser } from './app/useCases/users/createUser.js';
import { deleteUser } from './app/useCases/users/deleteUser.js';
import { listUser } from './app/useCases/users/listUser.js';
import { listUsers } from './app/useCases/users/listUsers.js';
import { updateUser } from './app/useCases/users/updateUser.js';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback){
      callback(null, `${uuidv4()}.png`);
    },
  }),
});

//Criar Roteador
router.post('/roteadores/create', upload.single('image'), createRoteador);

//Listar Roteadores
router.get('/roteadores', listRoteadores);

//Listar Roteadores por marca
router.get('/roteadores/:marca', listRoteadoresByMarca);

//Criar usuario
router.post('/users/create', createUser);

//Atualizar usuario
router.post('/users/update', updateUser);

//Listar todos usuarios
router.get('/users', AuthMiddlewares, listUsers);

//Lista Usuario por Email
router.get('/user/:email', AuthMiddlewares, listUser);

//Deleta Usuario por Email
router.get('/user/:email/delete', AuthMiddlewares, deleteUser);


//Validar Token
router.post('/validate', AuthMiddlewares, TokenValidate);

//Fazer autentica????o
router.post('/auth', AuthController);

//Criar ou Atualizar Atendimento
router.post('/atendimentos/create', createAtendimento);

//Listar Atendimentos do usuario
router.get('/atendimentos/:userId', AuthMiddlewares, listAtendimentosByUser);

//Listar Atendimentos
router.get('/atendimentos', AuthMiddlewares, listAtendimentos);

//Relatorio Mensal
router.get('/relatorio/:data', relatorioMensal);

//Buscar contratos do cliente
router.get('/os/getcontracts/:nomeCliente',  findContract);

//Buscar ordens por assunto
router.get('/os/getOS/:assunto',  findOrdem);

//Criar OS
router.post('/os/create',  createOS);

//Editar OS
router.post('/os/edit',  createOS);

//Listar Numeros Disponiveis Fixo
router.get('/telefonia-fixa/disponiveis/:cidade', listNumerosFixoDisponiveis);

//Listar Portabilidades Fixa
router.get('/telefonia-fixa/portabilidades-fixa', listPortabilidadesFixa);

//Listar Portabilidades Fixa
router.get('/telefonia-fixa/portabilidades-movel', listPortabilidadesMovel);

//Reservar Numero Fixo
router.get('/telefonia-fixa/reservar/:cidade/:numero/:reserva/:vendedor', reservarNumeroFixo);