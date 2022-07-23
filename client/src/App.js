import Stories from "./Pages/Stories";
import NewStory from "./Pages/NewStory";
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import classes from "./App.module.css";
import { Fragment } from "react";
import { useState, useEffect } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      await fetch("http://localhost:4000/user/login", {
        withCredentials: true,
      });
      setIsLoggedIn(true);
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn}/>
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
