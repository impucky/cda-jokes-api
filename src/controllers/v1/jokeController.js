const Joke = require("../../models/Joke");
const sequelize = require("../../utils/database");

exports.createJoke = async (req, res) => {
  try {
    const joke = await Joke.create(req.body);
    res.status(201).json(joke);
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({ error: error.errors.map((e) => e.message) });
    }
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getJokeById = async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "ID must be a positive integer" });
  }
  try {
    const joke = await Joke.findOne({ where: { id: req.params.id } });
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: `Couldn't find a joke with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const randomJoke = await Joke.findOne({
      order: sequelize.random(),
    });
    if (randomJoke) {
      res.status(200).json(randomJoke);
    } else {
      res.status(500).json({ error: "Server error" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};
