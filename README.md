## Inquantifiable Selves - Express

### Endpoints  
####inquantifiable-selves.herokuapp.com####

**GET /api/v1/foods**  
*returns all food resources*  

**GET /api/v1/foods/:id**  
*returns a single food resources*  

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
