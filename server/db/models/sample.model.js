const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sampleSchema = new Schema(
  {
    sample: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const Sample = mongoose.model("Sample", sampleSchema);

module.exports = Sample;
