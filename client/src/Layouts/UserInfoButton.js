import classes from "./UserInfoButton.module.css";

const UserInfoButton = (props) => {
  return (
    <button className={classes.button}>
      <span>{props.text}</span>
    </button>
  );
};

export default UserInfoButton;
