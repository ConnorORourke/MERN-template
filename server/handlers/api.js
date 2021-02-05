const Sample = require("../db/models/sample.model");

exports.sampleHandler = async (req, res, next) => {
  try {
    let sample = new Sample({ sample: "Hello!" });
    sample = await sample.save();
    return res.status(200).send(sample);
  } catch (err) {
    next(err);
  }
};
