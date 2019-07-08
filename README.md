## Inquantifiable Selves - Express

### Overview
This is a group project during Mod 4 at Turing School of Software and design between [Blake Enyart](https://github.com/blake-enyart), [Corey Sheesley](https://github.com/CSheesley), and Vincent Provenzano(https://github.com/Vjp888), where we were exposed to Node.js and Javascript. With a familiarity in an M-V-C architecture, we used this same design pattern as we built out endpoints for `food` and `meal` resources.

**Key Learnings**
* Using JavaScript and Node.js to build out a backend application with a number of endpoints.
* Implementing Jest for testing.
* Project management: Breaking down a feature into multiple user stories, using a project board, implementing a re-basing work flow, providing clear documentation in commit messages and pull requests.

### Endpoints  
#### [inquantifiable-selves.herokuapp.com](inquantifiable-selves.herokuapp.com)

**GET /api/v1/foods**  
*returns all food resources*  
Request:
```
Content-Type: application/json
Accept: application/json
```
Response:
```
status: 200
body:
{
  [
    {
      "id": 1,
      "name": "Banana",
      "calories": 150
    },
    {
      "id": 2,
      "name": "Apple",
      "calories": 10
    }
  ]
}
```

**GET /api/v1/foods/:id**  
*returns a single food resource*  
Request:
```
Content-Type: application/json
Accept: application/json
```
Response:
```
status: 200
body:
{
    "id": 1,
    "name": "Banana",
    "calories": 150
}
```

**GET /api/v1/meals**  
*returns all meal resources*
Request
```
Content-Type: application/json
Accept: application/json
```
Response
```
[
  {
    "id": 1,
    "name": "Breakfast",
    "foods": [
        {
          "id": 1,
          "name": "Banana",
          "calories": 150
      },
      {
        "id": 6,
        "name": "Yogurt",
        "calories": 550
      },
      {
        "id": 12,
        "name": "Apple",
        "calories": 220
      }
    ]
  },
  {
    "id": 2,
    "name": "Snack",
    "foods": [
      {
        "id": 1,
        "name": "Banana",
        "calories": 150
      },
      {
        "id": 9,
        "name": "Gum",
        "calories": 50
      },
      {
        "id": 10,
        "name": "Cheese",
        "calories": 400
      }
    ]
  }
]
```

**GET /api/v1/meals/:meal_id/foods**  
*returns a single meal resource and its foods*
Request:
```
Content-Type: application/json
Accept: application/json
```
Response:
```
status: 200
body:
{
  "id": 1,
  "name": "Breakfast",
  "foods": [
    {
      "id": 1,
      "name": "Banana",
      "calories": 150
    },
    {
      "id": 6,
      "name": "Yogurt",
      "calories": 550
    },
    {
      "id": 12,
      "name": "Apple",
      "calories": 220
    }
  ]
}
```

### Setup
*Database & Models*  
`$ npx sequelize db:create`  
`$ npx sequelize db:migrate`  
`$ npx sequelize db:seed:all`

### Versions
`node 10.16.0`  
`npm 6.9.0`  

### Packages
`$ npm install dotenv`  

*Testing*  
`$npm install babel-jest supertest shelljs -D`  
`$npm install jest-cli`   

### Schema
![schema](schema.png)
