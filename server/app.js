const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const userRouter = require("./routes/user");
const storyRouter = require("./routes/story");
const ExpressError = require("./utils/ExpressError");
const bodyParser = require("body-parser");

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
app.use(cors())
app.use(session({ secret: "tempSecert" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use("/user", userRouter);
app.use("/story", storyRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong" } = err;
  res.send(`ERROR ${statusCode} ${message}`);
});

app.listen(4000, () => {
  console.log("Serving on port 4000");
});
