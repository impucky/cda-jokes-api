const { Router } = require("express");
const {
  createJoke,
  getAllJokes,
  getJokeById,
  getRandomJoke,
} = require("../../controllers/v1/jokeController");

const router = Router();

/**
 * @openapi
 * /v1/jokes:
 *   post:
 *     summary: Create a new joke
 *     tags: [Jokes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               question:
 *                 type: string
 *                 example: "Quelle est la femelle du hamster ?"
 *               answer:
 *                 type: string
 *                 example: "L'Amsterdam"
 *     responses:
 *       201:
 *         description: Successfully created a joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       400:
 *         description: Bad request
 *       500:
 *         description: Server error
 */
router.post("/jokes", createJoke);

/**
 * @openapi
 * /v1/jokes:
 *   get:
 *     summary: Get all jokes
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A list of jokes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   question:
 *                     type: string
 *                   answer:
 *                     type: string
 *       500:
 *         description: Server error
 */
router.get("/jokes", getAllJokes);

/**
 * @openapi
 * /v1/jokes/random:
 *   get:
 *     summary: Get a random joke
 *     tags: [Jokes]
 *     responses:
 *       200:
 *         description: A random joke
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       500:
 *         description: Server error
 */
router.get("/jokes/random", getRandomJoke);

/**
 * @openapi
 * /v1/jokes/{id}:
 *   get:
 *     summary: Get a joke by its ID
 *     tags: [Jokes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: The ID of the joke to retrieve
 *     responses:
 *       200:
 *         description: A joke with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 question:
 *                   type: string
 *                 answer:
 *                   type: string
 *       404:
 *         description: No joke found with the specified ID
 *       500:
 *         description: Server error
 */
router.get("/jokes/:id", getJokeById);

module.exports = router;
