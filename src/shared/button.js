import { Button } from "@mui/material";
import React from "react";

const ButtonApp = ({ children, color, disabled, size, variant }) => {
  return (
    <Button color={color} disabled={disabled} size={size} variant={variant}>
      {children}
    </Button>
  );
};

export default ButtonApp;
