'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('food', [
      {
        id: 1,
        name: 'Banana',
        calories: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Apple',
        calories: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Sandwich',
        calories: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Chips',
        calories: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('meals', [
      {
        id: 1,
        name: 'Breakfast' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Lunch' ,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('mealfoods', [
      {
        mealId: 1,
        foodId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: 1,
        foodId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: 2,
        foodId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: 2,
        foodId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('foods', null, {});
    await queryInterface.bulkDelete('meals', null, {});
    await queryInterface.bulkDelete('mealfoods', null, {});
  }
};
