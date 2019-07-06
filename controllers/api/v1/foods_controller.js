var application = require('../../index.js');
var Food = application.food;
var FoodSerializer = application.foodSerializer;

async function index(req, res) {
  let foodList = await Food.findAll();

  if(foodList.length > 0) {
    let foods = foodList.map(function (singleFood) {
      return FoodSerializer.format(singleFood)
    });
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ foods })
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send({ "foods": [] })
  }
}

function show(req, res) {
  let foodId = req.params.id

  Food.findOne({ where: { id: foodId } })
  .then(singleFood => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(FoodSerializer.format(singleFood));
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": error.message});
  })
}

function create(req, res) {
  let newFood = req.body.food.name;
  let calories = req.body.food.calories;

  Food.create({
    name: newFood,
    calories: calories
  })
  .then(food => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send({"message": `${newFood} has been added`});
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({"error": error.message});
  })
}

function destroy(req, res) {
  let foodId = req.params.id

  Food.findOne({ where: { id: foodId } })
  .then(singleFood => {
    singleFood.destroy();
    res.setHeader("Content-Type", "application/json");
    res.status(204).send();
    // no body content delivered with 204 status code
  })
  .catch(error => {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": error.message});
  })
}


module.exports = {
  index: index,
  show: show,
  create: create,
  destroy: destroy
}
