'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('food', [
      {
        name: 'Banana',
        calories: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Apple',
        calories: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sandwich',
        calories: 400,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chips',
        calories: 250,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    await queryInterface.bulkInsert('meals', [
      {
        name: 'Breakfast' ,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Lunch' ,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});

    const allFoods = await queryInterface.sequelize.query(
      `SELECT food.id from food;`);

    const allMeals = await queryInterface.sequelize.query(
      `SELECT meals.id from meals;`);

    await queryInterface.bulkInsert('mealfoods', [
      {
        mealId: allMeals[0][0].id,
        foodId: allFoods[0][0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: allMeals[0][0].id,
        foodId: allFoods[0][1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: allMeals[0][1].id,
        foodId: allFoods[0][2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        mealId: allMeals[0][1].id,
        foodId: allFoods[0][3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('mealfoods', null, {});
    await queryInterface.bulkDelete('food', null, {});
    await queryInterface.bulkDelete('meals', null, {});
  }
};
