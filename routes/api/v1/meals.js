var express = require('express');
var router = express.Router();
var mealsController = require('../../../controllers/api/v1/meals_controller.js');

router.get('/', function(req, res) {
  mealsController.index(req, res);
});

router.get('/:mealId/foods', function(req, res){
  mealsController.show(req, res);
});

router.delete("/:mealId/foods/:foodId", function(req, res){
  mealsController.destroy(req, res)
});

module.exports = router;
