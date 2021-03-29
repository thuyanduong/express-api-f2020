//This file will allow us to connect our 
//express app to a postgres database

const { Pool } = require('pg')

const connectionLocal = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
}

console.log(connectionLocal)

