import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./AuthForm.module.css";

axios.defaults.withCredentials = true;
let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

const AuthForm = () => {
  const navigate = useNavigate();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const firstnameInput = useRef();
  const lastnameInput = useRef();
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const sendForm = async (event) => {
    event.preventDefault();
    var url;
    var lastname, firstname;
    if (isLogin) {
      url = "http://127.0.0.1:4000/user/login";
      lastname = "";
      firstname = "";
    } else {
      url = "http://127.0.0.1:4000/user/register";
      lastname = lastnameInput.current.value;
      firstname = firstnameInput.current.value;
    }

    const userInput = {
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      lastName: lastname,
      firstName: firstname,
    };

    await axios
      .post(url, JSON.stringify(userInput), axiosConfig)
      .then((res) => {
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
          window.location.reload(false);
        } else {
          console.log("error loging");
        }
      });
  };

  // await axios(url, {
  //   method: "POST",
  //   credentials: "include",
  //   body: JSON.stringify(userInput),
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  // }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label>Your Username</label>
          <input type="username" id="username" required ref={usernameInput} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordInput} />
        </div>
        <div>
          {!isLogin ? (
            <div>
              <div className={classes.control}>
                <label htmlFor="firstname">Your First Name</label>
                <input
                  type="firstname"
                  id="firstname"
                  required
                  ref={firstnameInput}
                />
              </div>
              <div className={classes.control}>
                <label htmlFor="lastname">Your Last Name</label>
                <input
                  type="lastname"
                  id="lastname"
                  required
                  ref={lastnameInput}
                />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className={classes.actions}>
          <button onClick={sendForm}>
            {isLogin ? "Login" : "Create Account"}
          </button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
