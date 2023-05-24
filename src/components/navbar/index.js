import React from "react";
import { useNavigate } from "react-router-dom";
import { Link, Typography } from "@mui/material";

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
      style={{
        textDecoration: underline ? "underline" : "none",
      }}
    >
      {children}
    </Link>
  );
};

export default NavBar;
