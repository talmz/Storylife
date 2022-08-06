const mongoose = require("mongoose");
const Story = require("../models/story");
const User = require("../models/user");

const descrips = ["blabla", "glagla", "nanana", "bugabuga"];
const titles = ["life", "vacation", "happines", "diving"];
const images = [
  "https://source.unsplash.com/400x400",
  "https://picsum.photos/400",
  "https://random.imagecdn.app/300/300",
  "https://picsum.photos/300",
];

mongoose.connect("mongodb://localhost:27017/story-life", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

console.log(Date());

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// async function seeds() {
//   var newUser = new User({
//     firstName: "tal",
//     lastName: "ma",
//     username: "taltol",
//     password: "1",
//   });

//   await newUser.save();
//   newUser = new User({
//     firstName: "liel",
//     lastName: "ben",
//     username: "luna",
//     password: "2",
//   });
//   await newUser.save();
//   newUser = new User({
//     firstName: "pizi",
//     lastName: "hatol",
//     username: "pizi",
//     password: "3",
//   });
//   await newUser.save();

//   newUser = new User({
//     firstName: "begin",
//     lastName: "pm",
//     username: "begini",
//     password: "4",
//   });
//   await newUser.save();
// }

// seeds();
let tempStory;

const seedDB = async () => {
  await Story.deleteOne({ _id: "62ee490d187de1699cb49be6" });
  await Story.deleteOne({ _id: "62ee497dcf73393580de661d" });
  // const Users = await User.find({});
  // Users.forEach((elem, index) => {
  //   tempStory = new Story({
  //     title: titles[index],
  //     image: images[index],
  //     date: Date(),
  //     description: descrips[index],
  //     user: elem,
  //   });
  //   tempStory.save();
  // });
};

seedDB();
