const express = require("express");
const connect = require("./utils/connect");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/v1", require("./routes/v1/jokeRoutes"));

app.listen(PORT, async () => {
  await connect();
  console.info(`Server is running at http://localhost:${PORT}`);
});
