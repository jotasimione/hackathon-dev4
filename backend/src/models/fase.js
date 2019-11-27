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
    const fases = await Fase.findAll();

    // console.log(fases);
    return fases;
  }
}

export default Fase;
