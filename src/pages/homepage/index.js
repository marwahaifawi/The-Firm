import React, { useState } from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import ReasonsToChooseUs from "../../components/homepagereasonstochooseussection";


const HomePage = () => {

  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <ReasonsToChooseUs/>
    
    </>
  );
};

export default HomePage;
