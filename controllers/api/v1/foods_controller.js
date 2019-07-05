var application = require('../../index.js');
var food = application.food;
var FoodSerializer = application.foodSerializer;

async function index(req, res) {
  let foodList = await food.findAll();

  if(foodList.length > 0) {
    let foods = foodList.map(function (singleFood) {
      return FoodSerializer.format(singleFood)
    });
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ foods })
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ foods })
  }
}

async function show(req, res) {
  let foodId = req.params.id
  let singleFood = await food.findOne({ where: { id: foodId } });

    if(singleFood) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(FoodSerializer.format(singleFood));
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(404).send({"error": "Food not found"});
    }
}

module.exports = {
  index: index,
  show: show
}
