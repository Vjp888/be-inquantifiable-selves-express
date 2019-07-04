'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('food', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.CITEXT,
        validate: {
          isAlpha: true
        }
      },
      calories: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: { greaterThanZero(value) {
          if (value < 0) {
            throw new Error("Calories must be greater than zero.");
          }
        }}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('food');
  }
};
