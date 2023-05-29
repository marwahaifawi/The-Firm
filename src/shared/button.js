import { Button } from "@mui/material";
import React from "react";
const ButtonApp = ({ children, color, disabled, size, variant, onClick, linkTo }) => {

  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default ButtonApp;
