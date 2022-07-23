import classes from "./Stories.module.css";
import { useState } from "react";
import Card from "../UI/Card";

const Stories = () => {
  const [stories, setStories] = useState([]);

  function fetchStorieslist() {
    fetch("http://localhost:4000/story")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setStories(data.stories);
      });
  }
  fetchStorieslist();

  return (
    <div className={classes.cardGrid}>
      {stories.map((story) => {
        return <Card>{story}</Card>;
      })}
    </div>
  );
};

export default Stories;
