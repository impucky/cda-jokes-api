const { Model, DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

class Joke extends Model {}

Joke.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { sequelize, modelName: "joke", timestamps: false }
);

module.exports = Joke;
