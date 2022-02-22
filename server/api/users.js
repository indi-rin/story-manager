const router = require("express").Router();
const {
  models: { User },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields
      attributes: ["id", "email"],
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
