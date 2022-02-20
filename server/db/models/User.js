const Sequelize = require("sequelize");
const db = require("../db");

// jwt, bcrypt ....... or look into cookies?

const User = db.define("user", {
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: Sequelize.STRING,
  },
});

// authentication class methods + password instance methods

// password-hashing hook

module.exports = User;
