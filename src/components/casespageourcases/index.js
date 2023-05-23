import React from "react";
import Stack from "@mui/material/Stack";
import { Typography, Container } from "@mui/material";
import CasesFilter from "../casesfilter";
const OurCases = () => {
  return (
    <Stack alignItems="center" spacing={3} mt={10}>
      <Typography variant="h4" textAlign="center">
        Our Cases
      </Typography>
      <CasesFilter />
    </Stack>
  );
};

export default OurCases;
