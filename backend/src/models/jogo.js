'use strict';
module.exports = (sequelize, DataTypes) => {
  const Jogo = sequelize.define('Jogo', {
    name: DataTypes.STRING,
    id_fase: DataTypes.INTEGER
  }, {});
  Jogo.associate = function(models) {
    // associations can be defined here
  };
  return Jogo;
};