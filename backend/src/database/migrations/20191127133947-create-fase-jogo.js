
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FaseJogos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_fase: {
        type: Sequelize.INTEGER
      },
      id_moviment: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FaseJogos');
  }
};
