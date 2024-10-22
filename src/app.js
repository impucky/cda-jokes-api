const express = require("express");
const connect = require("./utils/connect");
const swaggerDocs = require("./utils/swagger");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1", require("./routes/v1/jokeRoutes"));

app.listen(PORT, async () => {
  console.info(`Server is running at http://localhost:${PORT}`);
  await connect();
  swaggerDocs(app, PORT);
});
