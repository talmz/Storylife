import classes from "./Header.module.css";
import { ProfileButton, LoginButton, LogoutButton } from "./UserInfoButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  const isLoggedIn = props.isLoggedIn;
  return (
    <header className={classes.header}>
      <h1>StoryLife</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/story/new">New Story</Link>
          </li>
        </ul>
      </nav>
      {isLoggedIn ? (
        <div>
          <ProfileButton />
          <LogoutButton />
        </div>
      ) : (
        <LoginButton />
      )}
    </header>
  );
};

export default Header;
