import { Router } from 'express';
import { AuthController } from './controller/AuthController.js';
import { TokenValidate } from './controller/TokenValidate.js';
import { UserController } from './controller/UserController.js';
import { AuthMiddlewares } from './middlewares/auth.js';

const usercontroller = new UserController();
const authcontroller = new AuthController();
const tokenvalidadecontroler = new TokenValidate();

export const router = Router();

router.post('/create', usercontroller.store);
router.post('/update', usercontroller.update);
router.get('/users', AuthMiddlewares, usercontroller.index);

router.get('/user/:email', AuthMiddlewares, usercontroller.user);
router.get('/delete/:email', AuthMiddlewares, usercontroller.delete);

router.post('/validate', AuthMiddlewares, tokenvalidadecontroler.index);
router.post('/auth', authcontroller.authenticate);

