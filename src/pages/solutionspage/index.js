import React from "react";
import SolutionsSection from "../../components/homepagesolutionssection";
import { Container } from "@mui/material";
import OurSolutionsCards from "../../components/solutionpageoursolutions";

const SolutionPage = () => {
  return (
    <Container>
      <SolutionsSection />
      <OurSolutionsCards/>
    </Container>
  );
};

export default SolutionPage;
