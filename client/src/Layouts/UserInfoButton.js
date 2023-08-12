import { Link } from "react-router-dom";
import classes from "./UserInfoButton.module.css";
import Button from '@mui/material/Button';
const style = {cursor: "pointer", font: "inherit", border: "none", backgroundColor: "#E5BA73", color: "white", ml:"0.25rem", '&:hover': {
  backgroundColor: '#FAEAB1',
  borderColor: '#0062cc',
  boxShadow: 'none',
}}

const LogoutButton = (prps) => {
  const fetchLogout = async () => {
    localStorage.clear();
    window.location.reload(false);
  };
  return (
    <Button variant="contained" href="/" onClick={fetchLogout} sx={style}>
        Logout
    </Button>
  );
};

const ProfileButton = () => {
  return (
    <Button variant="contained" href="/user/profile" sx={style}>
        Profile
    </Button>

  );
};

const LoginButton = () => {
  return (
    <Button variant="contained" href="/user/login" sx={style}>
        Login
    </Button>
  );
};

export { ProfileButton, LoginButton, LogoutButton };
