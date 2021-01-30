const staticRouter = require("./routes/static");
const apiRouter = require("./routes/api");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", staticRouter());
app.use("/api", apiRouter());

const server = app.listen(process.env.DEFAULT_HTTP_PORT || 3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
