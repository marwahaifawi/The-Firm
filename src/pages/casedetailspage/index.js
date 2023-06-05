import { Container, Stack, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CaseDetailsHeroSection from "../../components/casedetailsherosection";
import api from "../../api/api";

const CaseDetailsPage = () => {
  const [cases, setCases] = useState([]);
  const getCases = async () => {
    const response = await api.get("/cases");
    return response.data;
  };

  useEffect(() => {
    const getAllCases = async () => {
      const allCases = await getCases();
      if (allCases) setCases(allCases);
    };
    getAllCases();
  }, []);

  const { caseID } = useParams();
  const singleCase = cases.find((caseObj) => caseObj.id === parseInt(caseID));
console.log(singleCase)
  if (!singleCase) {
    // Case not found, handle this case (e.g., show a message or redirect)
    return (
      <Typography variant="body2" align="center">
        Case not found.
      </Typography>
    );
  }

  return (
    <Container>
      <CaseDetailsHeroSection
        caseName={singleCase.title}
        description={singleCase.description}
        image={singleCase.image}
      />
      <Stack p={2} spacing={1} mt={10}>
        <Typography textAlign={"center"} gutterBottom variant="h4">
          {singleCase.title}
        </Typography>
        <Typography textAlign={"center"} variant="body2" lineHeight={2}>
          {singleCase.details}
        </Typography>
      </Stack>
    </Container>
  );
};

export default CaseDetailsPage;
