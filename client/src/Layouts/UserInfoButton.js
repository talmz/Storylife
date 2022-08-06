import { Link } from "react-router-dom";
import classes from "./UserInfoButton.module.css";

const LogoutButton = (prps) => {
  const fetchLogout = async () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <Link to="/">
      <button className={classes.button} onClick={fetchLogout}>
        <span>Logout</span>
      </button>
    </Link>
  );
};

const ProfileButton = () => {
  return (
    <Link to="/user/profile">
      <button className={classes.button}>
        <span>Profile</span>
      </button>
    </Link>
  );
};

const LoginButton = () => {
  return (
    <Link to="/user/login">
      <button className={classes.button}>
        <span>Login</span>
      </button>
    </Link>
  );
};

export { ProfileButton, LoginButton, LogoutButton };
