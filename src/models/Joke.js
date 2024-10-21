const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

class Joke extends Model {}

Joke.init(
  {
    question: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "joke", timestamps: false }
);

module.exports = Joke;
