const express = require("express");
const router = express.Router();
const Story = require("../models/story");

router.get("/", async (req, res) => {
  const stories = await Story.find({});
  res.send({ stories });
});

router.get("/:id", (req, res) => {
    const story = await Story.findById(req.params.id);
    res.send({ story });
});

router.post("/", (req, res) => {
  res.send("creating new story");
});

router.put("/:id", (req, res) => {
  res.send("edit specific story");
});

router.delete("/:id", (req, res) => {
  res.send("delete specific story");
});
module.exports = router;
