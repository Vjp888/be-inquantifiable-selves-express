var express = require('express');
var router = express.Router();
var mealsController = require('../../../controllers/api/v1/meals_controller.js');

router.get('/', function(req, res) {
  mealsController.index(req, res);
});

module.exports = router;
