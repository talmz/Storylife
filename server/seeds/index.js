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

let tempStory;

const seedDB = async () => {
  await Story.deleteMany({});
  const Users = await User.find({});
  Users.forEach((elem, index) => {
    tempStory = new Story({
      title: titles[index],
      image: images[index],
      date: Date(),
      description: descrips[index],
      user: elem,
    });
    tempStory.save();
  });
};

seedDB();
