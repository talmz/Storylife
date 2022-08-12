const mongoose = require("mongoose");
const User = require("../models/user");
const Story = require("../models/story");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  date: Date,
  description: String,
  user: { type: Schema.Types.ObjectId, ref: "User" },
  story: { type: Schema.Types.ObjectId, ref: "Story" },
});

module.exports = mongoose.model("Comment", CommentSchema);
//NOTE : can move to package-json export module
