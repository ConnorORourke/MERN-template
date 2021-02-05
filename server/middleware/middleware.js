const winston = require("../config/winston");

exports.errorMiddleware = (err, req, res, next) => {
  winston.error(err);
  return res.status(500).send("Something went wrong!");
};
