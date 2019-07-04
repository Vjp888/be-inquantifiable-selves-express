'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    name: DataTypes.CITEXT,
    calories: DataTypes.INTEGER
  }, {});
  food.associate = function(models) {
    // associations can be defined here
    food.belongsToMany(models.meal, {
      through: models.mealfood
    });
  };
  return food;
};
