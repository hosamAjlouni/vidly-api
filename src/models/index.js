const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const db = {};

// initiate db
const sequelize = new Sequelize("db", "admin", "admin", {
  dialect: "sqlite",
  host: "./data.sqlite",
});

// sync db
sequelize
  .sync({ alter: false })
  .then(() => {
    console.log("Database is ready...");
  })
  .catch((error) => console.log(error));

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      // get only models files
      file.indexOf(".") !== 0 &&
      !["index.js", "baseModel.js"].includes(file) &&
      file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    // assign each model to the models object by its name
    const model = require(path.join(__dirname, file))(sequelize);
    db[model.name] = model;
  });

// trigger associations for each model if exists
Object.keys(db).forEach((model) => {
  db[model].associate?.(db);
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
