class FoodSerializer {

  static format(singleFood) {
    let formatted = {
      "id": singleFood.id,
      "name": singleFood.name,
      "calories": singleFood.calories
    };
    return formatted
  }
}

module.exports = FoodSerializer;
