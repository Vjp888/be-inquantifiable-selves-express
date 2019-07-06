var shell = require('shelljs');
var request = require("supertest");
var app = require('../../../app');

describe('api', () => {
  beforeAll(() => {
    shell.exec('npx sequelize db:create')
    // shell.exec("psql -c '\\c be_inquantifiable_selves_express_test;'")
    shell.exec("psql -d be_inquantifiable_selves_express_test -c 'CREATE EXTENSION IF NOT EXISTS citext;'")
  });
  beforeEach(() => {
    shell.exec('npx sequelize db:migrate')
    shell.exec('npx sequelize db:seed:all')
  });
  afterEach(() => {
    shell.exec('npx sequelize db:migrate:undo:all')
  });
  // afterAll(() => {
  //   shell.exec('npx sequelize db:drop')
  // });

  describe('GET /api/v1/foods', () => {
    test('It should return all food resources and 200 status code', async () => {
      let response = await request(app).get("/api/v1/foods");
      let foodsArray = response.body.foods;

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("foods");
      expect(foodsArray).toBeInstanceOf(Array);
    });
  });

  describe('GET /api/v1/foods/:id', () => {
    test('It should return a single food resource and 200 status code', async () => {
      let response = await request(app).get("/api/v1/foods/1");
      let foodItem = response.body

      expect(response.statusCode).toBe(200);
      expect(foodItem).toHaveProperty("id");
      expect(foodItem).toHaveProperty("name");
      expect(foodItem).toHaveProperty("calories");
    });
  });

  describe('GET /api/v1/foods/:id', () => {
    test('It should return a 404 status code if :id is not present', async () => {
      let response = await request(app).get("/api/v1/foods/1000");
      let errorMessage = response.error.message

      expect(response.statusCode).toBe(404);
      expect(errorMessage).toBe("cannot GET /api/v1/foods/1000 (404)");
    });
  });

});
