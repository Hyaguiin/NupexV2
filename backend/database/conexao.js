  require("dotenv").config();  

  const knex = require("knex")({
    client: "pg",
    connection: process.env.DATABASE_URL,  
  });
  
  module.exports = knex;



  //require("dotenv").config();

//const knex = require("knex")({
  //  client: "pg",
    //connection: {
     // host: "localhost",
      //port: "5432",
      //user: "postgres",
      //password: "postgres",
      //database: "nupex_teste",
      //ssl: false,
    //},
  //});
 