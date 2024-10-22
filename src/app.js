const express = require("express");
const connect = require("./utils/connect");
const swaggerDocs = require("./utils/swagger");

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.RENDER_EXTERNAL_URL || `http://localhost:${PORT}`;

app.use(express.json());
app.use("/v1", require("./routes/v1/jokeRoutes"));

swaggerDocs(app);

app.use((req, res) => {
  res.status(404).send("404 Not found");
});

app.listen(PORT, async () => {
  console.info(`Server is running at ${url}`);
  console.log(`Docs available at ${url}/api-docs`);
  console.log(process.env.RENDER_EXTERNAL_URL);
  await connect();
});
