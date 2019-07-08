var express = require('express');
var router = express.Router();
var mealsController = require('../../../controllers/api/v1/meals_controller.js');
var mealFoodsController = require('../../../controllers/api/v1/meal_foods_controller.js');

// Index
router.get('/', function(req, res) {
  mealsController.index(req, res);
});

// Show
router.get('/:mealId/foods', function(req, res){
  mealsController.show(req, res);
});


// Create - mealFoods
router.post('/:mealId/foods/:foodId', function(req, res){
  mealFoodsController.create(req, res);
});

router.delete("/:mealId/foods/:foodId", function(req, res){
  mealFoodsController.destroy(req, res)
});

module.exports = router;
