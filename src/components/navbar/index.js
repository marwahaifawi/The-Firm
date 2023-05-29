import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

const NavBar = ({ children, color, variant, underline, onClick, linkTo }) => {
  const navigate = useNavigate();
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
      className="clickable"
      underline={underline ? underline : "none"}
    >
      {children}
    </Link>
  );
};

export default NavBar;
