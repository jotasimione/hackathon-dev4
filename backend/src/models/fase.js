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

  static async getFases() {
    const fases = await Fase.findAll();
    return fases;
  }
}

export default Fase;
