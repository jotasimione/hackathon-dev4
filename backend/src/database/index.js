import Fase from '../models/fase';

const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
// eslint-disable-next-line import/no-dynamic-require
const config = require(`${__dirname}/../config/database`)[env];

const models = [Fase];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(config);

    models.map(m => m.init(this.connection));
  }
}

module.exports = new Database();
