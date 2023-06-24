require('dotenv').config()

console.log("Loading config.js")
console.table({
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,

})

module.exports = {
  // dev
  development: {
    username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'postgres',
    database: process.env.DB_DATABASE || 'test_db_pg',
    host: process.env.DB_HOST || 'db',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
    logging: false,
  },
  // test
  test: {
    username: process.env.DB_USER || 'test_postgres',
    password: process.env.DB_PASS || 'test_postgres',
    database: process.env.DB_DATABASE || 'test_db_pg',
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
    logging: false,
  },
  // prod
  production: {
    username: process.env.DB_USER || 'test_postgres',
    password: process.env.DB_PASS || 'test_postgres',
    database: process.env.DB_DATABASE || 'test_db_pg',
    host: process.env.DB_HOST || 'postgres',
    port: process.env.DB_PORT || 5431,
    dialect: 'postgres',
    logging: false,
  }
}
