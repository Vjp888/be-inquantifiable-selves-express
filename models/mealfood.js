'use strict';
module.exports = (sequelize, DataTypes) => {
  const mealfood = sequelize.define('mealfood', {
    mealId: DataTypes.INTEGER,
    foodId: DataTypes.INTEGER
  }, {});
  mealfood.associate = function(models) {
    // associations can be defined here
    mealfood.belongsTo(models.meal);
    mealfood.belongsTo(models.food);
  };
  return mealfood;
};
