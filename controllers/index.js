module.exports = {
  food: require('../models').food,
  foodSerializer: require('../serializers/food_serializer.js'),
  meal: require('../models').meal,
  mealSerializer: require('../serializers/meal_serializer.js'),
  mealfood: require('../models').mealfood,
  fetch: require('node-fetch')
}
