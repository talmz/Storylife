import classes from "./Stories.module.css";
import { useState, useEffect } from "react";
import Card from "../UI/Card";
import StoryInfo from "./StoryInfo";

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [showStoryInfo, setShowStoryInfo] = useState(false);
  const [storyInfoDetails, setSpecificStoryInfo] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/story")
      .then((response) => response.json())
      .then((data) => setStories(data.stories));
  }, []);

  const handleClick = (story) => {
    setShowStoryInfo(!showStoryInfo);
    setSpecificStoryInfo(story);
  };

  return (
    <div className={classes.cardGrid}>
      {stories.map((story) => {
        return (
          <div>
            <Card className="grid-item" func={handleClick}>
              {story}
            </Card>
          </div>
        );
      })}
      {showStoryInfo ? <StoryInfo func={handleClick}>{storyInfoDetails}</StoryInfo> : <div></div>}
    </div>
  );
};

export default Stories;
