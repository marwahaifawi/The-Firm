import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonApp = ({ children, color, disabled, size, variant, onClick, linkTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(linkTo);
  };

  return (
    <Button
      color={color}
      disabled={disabled}
      size={size}
      variant={variant}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};

export default ButtonApp;
