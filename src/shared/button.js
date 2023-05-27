import React from "react";
import { Button } from "@mui/material";

const ButtonApp = ({ children, color, disabled, size, variant, onClick }) => {


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
