var application = require('./index.js')
var router = application.router
var foodsController = application.foodsController
// Index

router.get('/', function(req, res) {
  foodsController.index(req, res);
});

module.exports = router;
