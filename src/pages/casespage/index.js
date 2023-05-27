import React from "react";
import CasesPageHeroSection from "../../components/casespageherosection";
import { Container } from "@mui/material";
import OurCases from "../../components/casespageourcases";
import OurTestimonials from "../../components/homepageourtestimonialssection";

const CasePage = () => {
  return (
    <>
      <Container>
        <CasesPageHeroSection />
      </Container>
      <OurCases />
      <Container>
        <OurTestimonials />
      </Container>
    </>
  );
};

export default CasePage;
