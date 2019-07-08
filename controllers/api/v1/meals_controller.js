var application = require('../../index.js');
var meal = application.meal;
var mealFood = application.mealfood;
var MealSerializer = application.mealSerializer;

async function index(req, res) {
  let mealList = await meal.findAll();

  if(mealList.length > 0) {
    let meals = await mealList.map( function (singleMeal) {
      return MealSerializer.format(singleMeal)
    });
    Promise.all(meals)
    .then( meals => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(meals)
    });
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ "meals": [] })
  }
}

async function show(req, res) {
  let singleMeal = await meal.findOne({ where: {id: req.params.mealId} })
  if (singleMeal) {
    let formattedMeal = await MealSerializer.format(singleMeal);
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(formattedMeal);
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": "Meal not found"});
  }
}

async function destroy(req, res) {
  let mealId = req.params.mealId
  let foodId = req.params.foodId
  try {
    let mealFoodList = await mealFood.findAll({ where: {mealId: mealId, foodId: foodId} })
    var pry = require('pryjs'); eval(pry.it)
    for ( let mealFood of mealFoodList ) {
      mealFood.destroy();
    }
    res.setHeader("Content-Type", "application/json");
    res.status(204).send();
  } catch(error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": error.message});
  }
}

module.exports = {
  index: index,
  show: show,
  destroy: destroy
}
