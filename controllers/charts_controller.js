var application = require('./index.js');
var fetch = application.fetch

async function show(req, res) {
// fetch call to our django microservice
  // fetch('https://inquantifiable-selves.herokuapp.com/api/v1/foods')
  //   .then(response => response.json())
  //   .then(chartData => {
  //
  //     let placeholder = "future chart data"
  //     res.setHeader("Content-Type", "application/json");
  //     res.status(200).send(placeholder)
  })
}

module.exports = {
  show: show
}
