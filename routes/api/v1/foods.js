var application = require('./index.js')
var router = application.router
var foodsController = application.foodsController

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

module.exports = router;
