import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Container } from "@mui/material";
const OurCases = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3} mt={10}>
      <Typography variant="h4" textAlign="center">
        Our Cases
      </Typography>
      <Container alignItems="center" justifyContent="center"></Container>
    </Stack>
  );
};

export default OurCases;
