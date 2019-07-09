var express = require('express');
var router = express.Router();
var chartsController = require('../controllers/charts_controller.js')

/* GET Charts Info */
router.get('/', function(req, res) {
  chartsController.show(req, res);
});

module.exports = router;
