//imports
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const winston = require("./config/winston");
const app = express();
const staticRouter = require("./routes/static");
const apiRouter = require("./routes/api");
const middleware = require("./middleware/middleware");

//routes and middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", staticRouter());
app.use("/api", apiRouter());
app.use(middleware.errorMiddleware);

//spin up app and database
const start = () => {
  //database
  require("./startup/db")(winston);
  //server
  require("./startup/server")(app, winston);
};

start();
