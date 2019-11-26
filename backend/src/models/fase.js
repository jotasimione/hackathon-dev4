'use strict';
module.exports = (sequelize, DataTypes) => {
  const Fase = sequelize.define('Fase', {
    name: DataTypes.STRING
  }, {});
  Fase.associate = function(models) {
    // associations can be defined here
  };
  return Fase;
};