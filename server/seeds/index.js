const mongoose = require("mongoose");
const Story = require("../models/story");
const User = require("../models/user");
const Comment = require("../models/comments");

const descrips = ["blabla", "glagla", "nanana", "bugabuga", "shoko", "bannnaa"];
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

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

mongoose.set("useFindAndModify", false);

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

// const seedDB = async () => {
// let tempStory;
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
// };

const deleteSubDB = async () => {
  const comments = await Comment.find({});
  comments.forEach(async (elem, index) => {
    console.log(elem);
    await Story.findByIdAndUpdate("62dc325d01f9b14ff84024d6", {
      $pull: { comments: elem._id },
    });
  });
};

const seedDB = async () => {
  var tempComment, tempStory;
  const Users = await User.find({});
  Users.forEach(async (elem, index) => {
    tempComment = new Comment({
      date: Date(),
      description: descrips[index],
      user: elem,
      story: "62dc325d01f9b14ff84024d6",
    });
    tempComment.save();

    tempStory = await Story.findByIdAndUpdate("62dc325d01f9b14ff84024d6", {
      $push: { comments: tempComment._id },
    });
  });
};

seedDB();
// deleteSubDB();
