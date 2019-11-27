import Sequelize, { Model } from 'sequelize';

class Gabarito extends Model {
  static init(sequelize) {
    super.init(
      {
        id_fase: Sequelize.INTEGER,
        id_moviment: Sequelize.INTEGER,
        mov_dependencies: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Gabarito;
