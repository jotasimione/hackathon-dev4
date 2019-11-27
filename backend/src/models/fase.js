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

  static async allFases() {
    return Fase.findAll({ attributes: ['id', 'name'] });
  }
}

export default Fase;
