import React from "react";
import CasesPageHeroSection from "../../components/casespageherosection";
import { Container } from "@mui/material";
import OurCases from "../../components/casespageourcases";

const CasePage = () => {
  return (
    <Container>
      <CasesPageHeroSection />
      <OurCases />
    </Container>
  );
};

export default CasePage;
