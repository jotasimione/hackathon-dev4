import Sequelize, { Model } from 'sequelize';

class Movimento extends Model {
  static init(sequelize) {
    super.init(
      {
        id_fase: Sequelize.INTEGER,
        movimento: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static async getById(id) {
    return Movimento.findOne({ where: { id } });
  }

  static async getAll() {
    return Movimento.findAll({ attributes: ['id', 'name'] });
  }
}

export default Movimento;
