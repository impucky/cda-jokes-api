const Joke = require("../../models/Joke");
const sequelize = require("../../utils/database");

exports.createJoke = async (req, res) => {
  try {
    const joke = await Joke.create(req.body);
    res.status(201).json(joke);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add joke" });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve jokes" });
  }
};

exports.getJokeById = async (req, res) => {
  try {
    const joke = await Joke.findOne({ where: { id: req.params.id } });
    if (joke) {
      res.status(200).json(joke);
    } else {
      res.status(404).json({ error: `Couldn't find joke with id ${req.params.id}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve joke" });
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
      res.status(500).json({ error: "Couldn't find a joke" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve random joke" });
  }
};
