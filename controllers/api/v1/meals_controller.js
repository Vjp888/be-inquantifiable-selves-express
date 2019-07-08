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

module.exports = {
  index: index,
  show: show,
}
