import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';
import checkParams from './middlewares/checkParams';
import checkBody from './middlewares/checkBody';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());

    this.server.use(checkParams);
    this.server.use(checkBody);
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
