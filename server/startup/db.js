const mongoose = require("mongoose");

module.exports = (winston) => {
  const uri = process.env.MONGO_URI;
  if (uri) {
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    const connection = mongoose.connection;
    connection.once("open", () => {
      winston.info("MongoDB database connection established successfully");
    });
  } else {
    winston.info(
      "No mongo URI. If you aren't using Mongo ATLAS, you will need to remove this logic"
    );
  }
};
