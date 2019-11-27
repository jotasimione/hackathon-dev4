import { Router } from 'express';

import FaseController from './controllers/FaseController';
import JogoController from './controllers/JogoController';
import UsuarioController from './controllers/UsuarioController';
import MovimentoController from './controllers/MovimentoController';

const routes = new Router();

routes.get('/allfases', FaseController.getAll);
routes.get('/alljogos', JogoController.getAll);
routes.get('/allusuarios', UsuarioController.getAll);
routes.get('/allmovimentos', MovimentoController.getAll);

routes.get('/fase:id', FaseController.getById);
routes.get('/jogo:id', JogoController.getById);
routes.get('/usuario:id', UsuarioController.getById);
routes.get('/movimento:id', MovimentoController.getById);

export default routes;
