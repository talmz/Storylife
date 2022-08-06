import classes from "./Stories.module.css";
import { useState, useEffect } from "react";
import Card from "../UI/Card";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/story")
      .then((response) => response.json())
      .then((data) => setStories(data.stories));
  }, []);

  return (
    <div className={classes.cardGrid}>
      {stories.map((story) => {
        return <Card className="grid-item">{story}</Card>;
      })}
    </div>
  );
};

export default Stories;
