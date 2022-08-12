const express = require("express");
const router = express.Router();
const Story = require("../models/story");
const User = require("../models/user");
const Comment = require("../models/comments");
const ParseToken = require("../utils/ParseToken");
const jwt = require("jsonwebtoken");

var bodyParser = require("body-parser");
const mongoose = require("mongoose");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  storyID = req.query.storyID;
  if (validateStory(storyID)) {
    await Story.findById(storyID)
      .populate("comments")
      .then((data) => {
        res.json(data.comments);
      });
  } else {
    res.status(404).json("not found");
  }
});

router.post("/", async (req, res) => {
  const token = ParseToken(req);
  var user;
  if (!token) return res.json(false);
  else {
    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) return res.status(400).json("token invalid");

    user = await User.findById(verified.id);
    if (!user) return res.tatus(400).json("user invalid");
  }
  const { description, storyID } = req.body;
  if (validateStory(storyID)) {
    const newComment = new Comment({
      date: Date(),
      description: description,
      user: user._id,
      story: storyID,
    });
    await newComment.save();
    return res.json(newComment);
  } else {
    console.log("wrong");
  }
});

const validateStory = async (id) => {
  try {
    const foundStory = await Story.findById(req.params.id);
    if (foundStory) {
      return true;
    }
  } catch (e) {
    return false;
  }
};
module.exports = router;
