const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  word: {
    type: "String",
  },
  phonetics: {
    type: ["Mixed"],
  },
  meanings: {
    type: ["Mixed"],
  },
  license: {
    name: {
      type: "String",
    },
    url: {
      type: "String",
    },
  },
  sourceUrls: {
    type: ["String"],
  },
});

module.exports = mongoose.model("WordDefine", WordSchema);
