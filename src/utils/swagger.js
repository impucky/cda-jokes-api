const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path");

const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Carambar & Co Jokes API",
      version: "1.0.0",
    },
  },
  apis: [path.join(__dirname, "../routes/v1/*.js")],
};

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Docs available at http://localhost:${port}/api-docs`);
}

module.exports = swaggerDocs;
