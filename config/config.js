module.exports = {
  development: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: "be_inquantifiable_selves_express_development",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: process.env.PG_USERNAME,
    password: process.env.PG_PASSWORD,
    database: "be_inquantifiable_selves_express_test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: 'DATABASE_URL'
  }
}
