import Sequelize, { Model } from 'sequelize';

class Jogo extends Model {
  static init(sequelize) {
    super.init(
      {
        id_fase: Sequelize.INTEGER,
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static async getById(id) {
    return Jogo.findOne({ where: { id } });
  }

  static async getAll() {
    return Jogo.findAll({ attributes: ['id', 'name'] });
  }
}

export default Jogo;
