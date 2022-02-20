const db = require("./db");

const User = require("./models/User");
const Project = require("./models/Project");
const Character = require("./models/Character");

// associations
User.hasMany(Project);
Project.belongsTo(User);

Project.hasMany(Character);
Character.belongsTo(Project);

module.exports = {
  db,
  models: {
    User,
    Project,
    Character,
  },
};
