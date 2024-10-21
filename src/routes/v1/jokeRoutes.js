const { Router } = require("express");
const {
  createJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
} = require("../../controllers/v1/jokeController");

const router = Router();

router.post("/jokes", createJoke);
router.get("/jokes", getAllJokes);
router.get("/jokes/random", getRandomJoke);
router.get("/jokes/:id", getJokeById);

module.exports = router;
