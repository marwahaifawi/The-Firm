import React from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import ReasonsToChooseUs from "../../components/homepagereasonstochooseussection";
import OurBlogs from "../../components/homepageourblogssection";
import OurTestimonials from "../../components/homepageourtestimonialssection";
import GetInTouch from "../../components/homepagegetintouch";
import { Container } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <ReasonsToChooseUs />
      <OurBlogs />
      <OurTestimonials />
      <GetInTouch />
    </Container>
  );
};

export default HomePage;
