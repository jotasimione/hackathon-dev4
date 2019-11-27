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

  static async allMovimentos() {
    return Movimento.findAll({ attributes: ['id', 'name'] });
  }
}

export default Movimento;
