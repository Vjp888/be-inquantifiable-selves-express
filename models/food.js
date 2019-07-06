'use strict';
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define('food', {
    name: {
      type: DataTypes.CITEXT,
      validate: {
        isAlpha: true
      }
    },
    calories: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: { greaterThanZero(value) {
        if (value < 0) {
          throw new Error("Calories must be greater than zero.");
        }
      }}
    }
  }, {});
  food.associate = function(models) {
    // associations can be defined here
    food.belongsToMany(models.meal, {
      through: models.mealfood
    });
  };
  food.query = function(queryString) {
    return sequelize.query(queryString);
  };
  return food;
};
