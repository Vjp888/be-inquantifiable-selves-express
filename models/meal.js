'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('meal', {
    name: DataTypes.CITEXT
  }, {});
  meal.associate = function(models) {
    // associations can be defined here
    meal.belongsToMany(models.food, {
      through: models.mealfood,
      as: 'foods'
    });
  };
  return meal;
};
