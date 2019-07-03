'use strict';
module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.CITEXT
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};