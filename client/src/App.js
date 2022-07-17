import Stories from "./Pages/Stories";
import NewStory from "./Pages/NewStory";
import { Routes, Route } from "react-router-dom";
import StoryInfo from "./Pages/StoryInfo";
import Header from "./Layouts/Header";
import classes from "./App.module.css";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <Header />
      <div className={classes.pageContent}>
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/new" element={<NewStory />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
