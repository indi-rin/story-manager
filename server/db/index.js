const db = require("./db");

const User = require("./models/User");
const Project = require("./models/Project");
const Character = require("./models/Character");

// associations here!

module.exports = {
  db,
  models: {
    User,
    Project,
    Character,
  },
};
