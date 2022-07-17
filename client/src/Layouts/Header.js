import classes from "./Header.module.css";
import UserInfoButton from "./UserInfoButton";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>StoryLife</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">New Story</Link>
          </li> 
        </ul>
      </nav>
      <UserInfoButton />
    </header>
  );
};

export default Header;
