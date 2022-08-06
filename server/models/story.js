const mongoose = require("mongoose");
const User = require("../models/user");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: String,
  image: String,
  date: Date,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Story", StorySchema);
//NOTE : can move to package-json export module
