'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movimento = sequelize.define('Movimento', {
    moviment: DataTypes.STRING,
    id_fase: DataTypes.INTEGER
  }, {});
  Movimento.associate = function(models) {
    // associations can be defined here
  };
  return Movimento;
};