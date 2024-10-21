const sequelize = require("./database");

async function connect() {
  try {
    sequelize.sync();
    console.log("Connected to database");
  } catch (error) {
    console.error("Could not connect to database");
    process.exit(1);
  }
}

module.exports = connect;
