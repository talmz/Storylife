const express = require("express");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.send("userInfo");
});

Router.post("/", (req, res) => {
  res.send("new user ");
});

Router.get("/:id", (req, res) => {
  res.send("user info by id");
});

Router.put("/:id", (req, res) => {
  res.send("update user info by id");
});

Router.delete("/:id", (req, res) => {
  res.send("delete user by id");
});

module.exports = Router;
