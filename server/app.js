const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();

// logging middleware
app.use(morgan("dev"));

// body-parsing middleware
app.use(express.json());

// api routes - AUTH ROUTES TO GO HERE TOO
app.use("/api", require("./api"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "..", "public/index.html"))
);

// static file-serving middleware
app.use(express.static(path.join(+__dirname, "..", "public")));

// send 404 or remaining requests with an extension
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  } else {
    next();
  }
});

// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// error-handling endware
app.use((error, req, res, next) => {
  console.error(error);
  console.error(error.stack);
  res
    .status(error.status || 500)
    .send(error.message || "Internal Server Error");
});

module.exports = app;
