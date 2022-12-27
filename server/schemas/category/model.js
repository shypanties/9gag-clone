const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/dev-env_MemePage')
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    require: false,
    default: true
  }
});

module.exports = mongoose.model("Category", categorySchema);
