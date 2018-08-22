'use strict';
module.exports = (sequelize, DataTypes) => {
  var burgers = sequelize.define('burgers', {
    burger_name: DataTypes.STRING,
    consumed: DataTypes.BOOLEAN
  }, {});
  burgers.associate = function(models) {
    // associations can be defined here
  };
  return burgers;
};