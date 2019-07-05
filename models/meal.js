'use strict';
module.exports = (sequelize, DataTypes) => {
  const meal = sequelize.define('meal', {
    name: {
      type: DataTypes.CITEXT,
      validate: {
        isAlpha: true
      }
    }
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
