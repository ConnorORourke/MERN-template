const express = require("express");
const apiHandlers = require("../handlers/api");

const apiRouter = () => {
  const router = express.Router();
  router.use(express.static(staticFilesRoot()));
  router.get("/", apiHandlers.sampleHandler);
  return router;
};

module.exports = apiRouter;
