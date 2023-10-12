const mongoose = require("mongoose");

const savedItemSchema = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
  resources: {
    type: Array,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true,
    unique: true,
  },
  topicsSaved: {
    type: Map,
    of: { type: mongoose.Schema.Types.ObjectId, ref: "SavedItem" },
    default: {},
  },
});

const User = mongoose.model("User", userSchema);
const SavedItem = mongoose.model("SavedItem", savedItemSchema);

module.exports = { User, SavedItem };
