'use strict';
module.exports = (sequelize, DataTypes) => {
  const FaseJogo = sequelize.define('FaseJogo', {
    id_fase: DataTypes.INTEGER,
    id_moviment: DataTypes.INTEGER
  }, {});
  FaseJogo.associate = function(models) {
    // associations can be defined here
  };
  return FaseJogo;
};