require("dotenv").config();
const { Pool } = require("pg");

const isProduction = process.env.NODE_ENV === "production";

// const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
// const connectionString = "postgresql://testuser:test@localhost:5432/testdb";

// const pool = new Pool({
//   connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
// });


const pool = new Pool({
    user: "testpf",
    password: "123",
    database: "pfdb",
    host: "localhost",
    port: 5432,
  }); 

module.exports = pool;


// APP_NAME = plant
// APP_PORT = 8000
// NODE_ENV = dev
// env = dev
// DB_USERNAME = postgres
// DB_NAME = pland_farm
// DB_PASSWORD = postgres
// DB_PORT = 5432
// DB_HOST = ec2-18-206-124-98.compute-1.amazonaws.com
// DB_DIALECT = postgres

// //! THIS IS FROM SSH key ON AWS
// ec2-18-206-124-98.compute-1.amazonaws.com