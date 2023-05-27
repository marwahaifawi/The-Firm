import React from "react";
import SolutionsSection from "../../components/homepagesolutionssection";
import { Container } from "@mui/material";
import OurSolutionsCards from "../../components/solutionpageoursolutions";
import SolutionDescription from "../../components/solutionpagesolutiondescriptionsection";
import OurTestimonials from './../../components/homepageourtestimonialssection/index';

const SolutionPage = () => {
  return (
    <Container>
      <SolutionsSection />
      <OurSolutionsCards/>
      <SolutionDescription/>
      <OurTestimonials/>
    </Container>
  );
};

export default SolutionPage;
