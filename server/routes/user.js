require("dotenv").config();

const express = require("express");
const Router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");

Router.get("/", (req, res) => {
  res.send("userInfo");
});

Router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User(req.body);
  // const existingUsername = await User.findOne({ username: newUser.username });
  // if (existingEmail) {
  //   return res
  //     .status(400)
  //     .json({ msg: "An account with this email already exists" });
  // }
  await newUser.save();
  const token = jwt.sign({ id: isValid._id }, process.env.ACCESS_TOKEN_SECRET);
  res.json({
    token: token,
  });
});

Router.post("/logout", (req, res) => {
  console.log("logout");
  res.send(true);
});

Router.post("/login", async (req, res) => {
  console.log("post login");
  const { username, password } = req.body;
  const isValid = await User.findAndValidate(username, password);
  if (isValid) {
    const token = jwt.sign(
      { id: isValid._id },
      process.env.ACCESS_TOKEN_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.send(false);
  }
});

Router.get("/login", async (req, res) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
});

Router.put("/:id", (req, res) => {
  res.send("update user info by id");
});

Router.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

module.exports = Router;
