var express = require('express');
var router = express.Router();
var foodsController = require('../../../controllers/api/v1/foods_controller.js');

// Index
router.get('/', function(req, res) {
  foodsController.index(req, res);
});

// Show
router.get('/:id', function(req, res) {
  foodsController.show(req, res);
});

// Create
router.post('/', function(req, res) {
  foodsController.create(req, res);
});

// Update
router.patch('/:id', function(req, res) {
  foodsController.update(req, res);
})

// Delete
router.delete('/:id', function(req, res) {
  foodsController.destroy(req,res);
})

module.exports = router;
