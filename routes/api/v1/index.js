var express = require('express');

module.exports = {
  router: express.Router(),
  foodsController: require('../../../controllers/api/v1/foods_controller')
}
