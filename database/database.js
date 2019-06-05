const Sequelize = require("sequelize");
const db = {};
const sequelize = new Sequelize("timeTable", "root", "IT2017!08", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
