import React from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import ReasonsToChooseUs from "../../components/homepagereasonstochooseussection";
import OurBlogs from "../../components/homepageourblogssection";
import OurTestimonials from "../../components/homepageourtestimonialssection";

const HomePage = () => {
  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <ReasonsToChooseUs />
      <OurBlogs />
      <OurTestimonials/>
    </>
  );
};

export default HomePage;
