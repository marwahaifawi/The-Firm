import { Link } from "@mui/material";
import React from "react";

const NavBar = ({ children, color, variant, underline, onClick }) => {
  return (
    <Link
      onClick={onClick}
      color={color}
      variant={variant}
      underline={underline}
    >
      {children}
    </Link>
  );
};

export default NavBar;
