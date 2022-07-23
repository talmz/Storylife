const express = require("express");
const Router = express.Router();

const User = require("../models/user");

Router.get("/", (req, res) => {
  res.send("userInfo");
});

Router.post("/register", async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  req.session.user_id = newUser._id;
  res.send({ newUser });
});

Router.get("/login", (req, res) => {
  if( req.session.user_id != null)
});

Router.put("/:id", (req, res) => {
  res.send("update user info by id");
});

Router.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

module.exports = Router;
