var application = require('../../index.js');
var MealFood = application.mealfood;
var Food = application.food;
var Meal = application.meal;

async function create(req, res) {
  let meal = await Meal.findOne({where: { id: req.params.mealId }})
  let food = await Food.findOne({where: { id: req.params.foodId }})

  try {
    await MealFood.create({
      mealId: meal.id,
      foodId: food.id
    })
    res.setHeader("Content-Type", "application/json");
    res.status(201).send({"message": `successfully added ${food.name} to ${meal.name}`});
  } catch(error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": error.message});
  }
}


module.exports = {
  create: create
}
