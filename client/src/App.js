import Stories from "./Pages/Stories";
import NewStory from "./Pages/NewStory";
import { Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import classes from "./App.module.css";
import { Fragment } from "react";
import { useState, useEffect } from "react";
import AuthForm from "./Pages/Auth/AuthForm";
import axios from "axios";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      checkLogin(token);
    } else return;
  });

  const checkLogin = async (token) => {
    try {
      await axios
        .get("http://localhost:4000/user/login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => setIsLoggedIn(response.data));
    } catch (e) {
      setIsLoggedIn(false);
    }
  };

  return (
    <Fragment>
      <Header isLoggedIn={isLoggedIn} />
      <div className={classes.pageContent}>
        <Routes>
          <Route path="/" element={<Stories />} />
          <Route path="/new" element={<NewStory isLoggedIn={isLoggedIn} />} />
          <Route path="/user/login" element={<AuthForm />} />
        </Routes>
      </div>
    </Fragment>
  );
}

export default App;
