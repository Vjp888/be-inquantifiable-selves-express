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

async function show(req, res) {
  let foodId = req.params.id
  try {
    let singleFood = await Food.findOne({ where: { id: foodId } });
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(FoodSerializer.format(singleFood));
  } catch(error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({ "error": error.message });
  }
}

async function update(req, res, sequelize) {
  let foodId = req.params.id
  let foodParams = req.body.food
  let singleFood = await Food.findOne({ where: { id: foodId } });
  if(singleFood) {
    for(let [attr, value] of Object.entries(foodParams)) {
      try {
        // Creates SQL query for each attribute the user seeks to change
        await Food.query(`UPDATE food
                  SET
                    ${attr} = '${value}'
                  WHERE
                    food.id = ${foodId}
                  RETURNING
                    *;`)

      } catch (err) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send({"error": err.message});
      }
    }
    await singleFood.reload()
    res.setHeader("Content-Type", "application/json");
    res.status(202).send(FoodSerializer.format(singleFood));
  } else {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": "Food is not in the database"});
  }
}

async function create(req, res) {
  let newFood = req.body.food.name;
  let calories = req.body.food.calories;
  
  try {
    await Food.create({
      name: newFood,
      calories: calories
    })
    res.setHeader("Content-Type", "application/json");
    res.status(201).send({"message": `${newFood} has been added`});
  } catch(error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send({"error": error.message});
  }
}

async function destroy(req, res) {
  let foodId = req.params.id
  
  try {
    let singleFood = await Food.findOne({ where: { id: foodId } });
    singleFood.destroy();
    res.setHeader("Content-Type", "application/json");
    res.status(204).send();
    // no body content delivered with 204 status code
  } catch(error) {
    res.setHeader("Content-Type", "application/json");
    res.status(404).send({"error": error.message});
  }
}

module.exports = {
  index: index,
  show: show,
  create: create,
  update: update,
  destroy: destroy
}
