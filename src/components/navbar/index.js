import { Link } from "@mui/material";
import React from "react";

const NavBar = ({ children, color, variant, underline, onClick , linkTo }) => {
  return (
    <Link
      onClick={onClick}
      color={color}
      variant={variant}
      underline={underline}
      className="clickable"
      href={linkTo}
    >
      {children}
    </Link>
  );
};

export default NavBar;
