const Joke = require("../models/Joke");
const sequelize = require("./database");
const connect = require("./connect");
const jokes = require("./jokes.json");

async function seedDb() {
  await connect({ force: true });
  await Joke.bulkCreate(jokes);
  console.log("Successfully initialized the database");
  sequelize.close();
}

seedDb();
