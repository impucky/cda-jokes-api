const { Router } = require("express");
const { createJoke, getAllJokes } = require("../../controllers/v1/jokeController");

const router = Router();

router.post("/jokes", createJoke);

router.get("/jokes", getAllJokes);

module.exports = router;
