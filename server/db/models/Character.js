const Sequelize = require("sequelize");
const db = require("../db");

const Character = db.define("character", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
  bio: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT,
  },
});

// any methods or hooks?

module.exports = Character;
