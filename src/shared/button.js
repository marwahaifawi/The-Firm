import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
