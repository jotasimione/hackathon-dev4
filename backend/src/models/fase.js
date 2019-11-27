import Sequelize, { Model } from 'sequelize';

class Fase extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static async getById(id) {
    return Fase.findOne({ where: { id } });
  }

  static async getAll() {
    return Fase.findAll({ attributes: ['id', 'name'] });
  }
}

export default Fase;
