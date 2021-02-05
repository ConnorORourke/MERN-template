const express = require("express");
const path = require("path");

staticFilesRoot = () => {
  return `${__dirname}/../../client/build`;
};

const staticRouter = () => {
  const router = express.Router();
  router.use(express.static(staticFilesRoot()));
  router.get("/", (req, res) => {
    return res.sendFile(path.join(staticFilesRoot(), "index.html"));
  });
  return router;
};

module.exports = staticRouter;
