const winston = require("winston");
const appRoot = require("path").resolve("./");

// define the custom settings for each transport (file, console)
const options = {
  file: {
    level: "info",
    filename: `${appRoot}/server/logs/server.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
let logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file),
  ],
  exitOnError: false, // do not exit on handled exceptions
});

module.exports = logger;
