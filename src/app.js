const express = require("express");
const connect = require("./utils/connect");
const swaggerDocs = require("./utils/swagger");

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

app.use(express.json());
app.use("/v1", require("./routes/v1/jokeRoutes"));

swaggerDocs(app);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to the Carambar & Co Jokes API",
    version: "1.0.0",
    endpoints: {
      "POST /v1/jokes": "Create a new joke",
      "GET /v1/jokes": "Retrieve all jokes",
      "GET /v1/jokes/random": "Get a random joke",
      "GET /v1/jokes/{id}": "Get a joke by ID",
      "GET /api-docs": "Documentation",
    },
  });
});

app.use((req, res) => {
  res.status(404).send("404 Not found");
});

app.listen(PORT, async () => {
  console.info(`Server is running at ${url}`);
  console.log(`Docs available at ${url}/api-docs`);
  await connect();
});
