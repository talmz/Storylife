const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/user");
const storyRouter = require("./routes/story");
const commentRouter = require("./routes/comment");
const ExpressError = require("./utils/ExpressError");
const bodyParser = require("body-parser");

mongoose.connect("mongodb+srv://first:1234@cluster0.dtljkat.mongodb.net/Storylife", {
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
const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use("/user", userRouter);
app.use("/story", storyRouter);
app.use("/comment", commentRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something Went Wrong" } = err;
  res.send(`ERROR ${statusCode} ${message}`);
});

// port to config
app.listen(4000, () => {
  console.log("Serving on port 4000");
});
