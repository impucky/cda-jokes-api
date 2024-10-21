const sequelize = require("./database");

async function connect(options) {
  try {
    sequelize.sync(options);
    console.log("Connected to database");
  } catch (error) {
    console.error("Could not connect to database");
    process.exit(1);
  }
}

module.exports = connect;
