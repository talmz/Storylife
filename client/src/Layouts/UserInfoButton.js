import classes from "./UserInfoButton.module.css";

const UserInfoButton = (props) => {
  return (
    <button className={classes.button}>
      <span>User Info</span>
    </button>
  );
};

export default UserInfoButton;
