const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");
const storyRouter = require("./routes/story");
const ExpressError = require("./utils/ExpressError");

mongoose.connect("mongodb://localhost:27017/story-life", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/story", storyRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong" } = err;
  res.send(`ERROR ${statusCode} ${message}`);
});

app.listen(3000, () => {
  console.log("Serving on port 3000");
});
