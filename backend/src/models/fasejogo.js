import Sequelize, { Model } from 'sequelize';

class FaseJogo extends Model {
  static init(sequelize) {
    super.init(
      {
        id_fase: Sequelize.INTEGER,
        id_moviment: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
  }

  static async getById(id) {
    return FaseJogo.findOne({ where: { id } });
  }

  static async getAll() {
    return FaseJogo.findAll({ attributes: ['id_fase', 'id_moviment'] });
  }
}
export default FaseJogo;
