import Sequelize, { Model } from 'sequelize';

class MovFase extends Model {
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
}

export default MovFase;
