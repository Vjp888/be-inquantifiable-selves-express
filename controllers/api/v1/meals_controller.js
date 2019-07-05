var application = require('../../index.js');
var meal = application.meal;
var MealSerializer = application.mealSerializer;

async function index(req, res) {
  let mealList = await meal.findAll();

  if(mealList.length > 0) {
    let meals = mealList.map(function (singleMeal) {
      return MealSerializer.format(singleMeal)
    });
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ meals })
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ "meals": [] })
  }
}

module.exports = {
  index: index
}
