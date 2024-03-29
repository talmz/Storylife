const mongoose = require("mongoose");
const User = require("../models/user");
const Comment = require("../models/comments");
const Schema = mongoose.Schema;

const StorySchema = new Schema({
  title: String,
  image: String,
  date: Date,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Story", StorySchema);
//NOTE : can move to package-json export module
