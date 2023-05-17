import { Button } from "@mui/material";
import React from "react";

const ButtonApp = ({ children, color, disabled, size, variant  , clicked , setClicked}) => {
  const handleButtonClick = () => {
    setClicked(!clicked);
  };
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant} onClick={handleButtonClick}>
      {children}
    </Button>
  );
};

export default ButtonApp;
