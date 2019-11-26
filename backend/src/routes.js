import { Router } from 'express';

import FaseController from './controllers/FaseController';
// import JogoController from './controllers/JogoController';
// import UsuarioController from './controllers/UsuarioController';

const routes = new Router();

routes.get('/allfases', FaseController.getAllFases);
// routes.get('/users', JogoController.update);
// routes.get('/users', UsuarioController.update);

export default routes;
