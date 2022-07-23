const express = require("express");
const router = express.Router();
const Story = require("../models/story");
const User = require("../models/user");
var bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get("/", async (req, res) => {
  const stories = await Story.find({}).populate("user");
  // for (var story of stories) {
  //   var user = User.findById(story.user).then((data) => {
  //     return data;
  //   });
  //   console.log(user);
  // }
  res.send({ stories });
});

router.get("/:id", async (req, res) => {
  const newStory = await Story.findById(req.params.id);
  newStory.date = Date(newStory.date);
  newStory.user = await User.findById(newStory.user);
  res.send({ story });
});

router.post("/", async (req, res) => {
  const newStory = new Story(req.body);
  await newStory.save();
  res.send(newStory);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editedStory = await Story.findByIdAndUpdate(id, { ...req.body });
  res.send({ editedStory });
});
//62d6c7d9417ec409489f3863
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Story.findByIdAndDelete(id);
  res.send("delete specific story");
});
module.exports = router;
