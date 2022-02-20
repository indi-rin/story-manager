const Sequelize = require("sequelize");
const db = require("../db");

const Project = db.define("project", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  wordCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
    validate: {
      min: 0,
    },
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  dateStarted: {
    type: Sequelize.DATEONLY,
    defaultValue: Sequelize.DataTypes.NOW,
  },
  lastUpdated: {
    type: Sequelize.DATEONLY,
  },
  summary: {
    type: Sequelize.STRING,
  },
  notes: {
    type: Sequelize.TEXT,
  },
});

// any methods or hooks?

module.exports = Project;
