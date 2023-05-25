import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const CaseDetailsPage = () => {
  const {caseID}=useParams()
  return (
    <>
      <Typography mt={50} variant="h1">
      CaseDetailsPage
      </Typography>
    </>
  );
};

export default CaseDetailsPage;
