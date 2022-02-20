"use strict";

const {
  db,
  models: { User, Project, Character },
} = require("../server/db");

// seed function to clear the DB, update tables to match models, and populates DB
const seed = async () => {
  // clear DB and match tables to models
  await db.sync({ force: true });
  console.log("DB synced!");

  // create users

  // create projects

  // associate projects to users
};

// run seed separate function from seed function to isolate error-handling
const runSeed = async () => {
  console.log("Seeding...");
  try {
    await seed();
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    console.log("Closing DB connection...");
    await db.close();
    console.log("DB connection closed.");
  }
};

if (module === require.main) {
  runSeed();
}

// export for testing purposes
module.exports = seed;
