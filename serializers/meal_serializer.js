class MealSerializer {

  static format(singleMeal) {
    // This is setting the meal attributes into result hash
    let result = {
      'id': singleMeal.id,
      'name': singleMeal.name
    }
    // This function pulls the attributes from the foods associations and mapping them to their keys
    singleMeal.getFoods()
    .then(foods => {
      result['foods'] = foods.map(function (food){
        let foodParse = {
          'id': food.id,
          'name': food.name,
          'calories': food.calories
        }
        //don't forget to return result
        return foodParse
      })
    })
    //don't forget to return result
    return result
  }
}

module.exports = MealSerializer;
