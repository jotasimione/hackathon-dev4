import { Router } from 'express';

import checkParams from './middlewares/checkParams';
import checkBody from './middlewares/checkBody';

import FaseController from './controllers/FaseController';
import JogoController from './controllers/JogoController';
import UsuarioController from './controllers/UsuarioController';
import MovimentoController from './controllers/MovimentoController';

const routes = new Router();

routes.get('/allfases', FaseController.getAll);
routes.get('/alljogos', JogoController.getAll);
routes.get('/allusuarios', UsuarioController.getAll);
routes.get('/allmovimentos', MovimentoController.getAll);

routes.get('/fase:id', FaseController.getById, checkParams);
routes.get('/jogo:id', JogoController.getById, checkParams);
routes.get('/usuario:id', UsuarioController.getById, checkParams);
routes.get('/movimento:id', MovimentoController.getById, checkParams);

routes.get(
  '/usuarios:id/score',
  UsuarioController.getScore,
  checkParams,
  checkBody
);
routes.get('/fase:id/valida', FaseController.validaFase, checkParams);
routes.get('/jogo:id_jogo&:id_usuario', JogoController.getJornada, checkParams);

export default routes;
