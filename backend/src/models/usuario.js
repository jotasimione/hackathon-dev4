import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        surname: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static async allUsuarios() {
    return Usuario.findAll({ attributes: ['id', 'name'] });
  }
}

export default Usuario;
