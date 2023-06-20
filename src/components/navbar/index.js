import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  clicked: {
    position: "relative",
    cursor: "pointer",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-2px",
      left: 0,
      width: "100%",
      height: "4px",
      backgroundColor: theme.palette.primary.main,
      borderRadius: "2px",
    },
  },
}));

const NavBar = ({ children, color, variant, onClick, linkTo }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === linkTo;

  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick(event);
    }
    navigate(linkTo);
  };
  return (
    <Link
      onClick={handleClick}
      color={color}
      variant={variant}
      className={`${isActive ? classes.clicked : "clickable"}`}
      underline="none"
    >
      {children}
    </Link>
  );
};

export default NavBar;
