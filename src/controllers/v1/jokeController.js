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
