var application = require('../../index.js');
var food = application.food;

async function index(req, res) {
  let foods = await food.findAll();
  res.status(200)
  res.send({ foods })
}

module.exports = {
  index: index
}
