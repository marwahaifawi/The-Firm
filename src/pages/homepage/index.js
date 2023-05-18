import React, { useState } from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import ReasonsToChooseUs from "../../components/homepagereasonstochooseussection";
import OurBlogs from "../../components/homepageourblogssection";


const HomePage = () => {

  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <ReasonsToChooseUs/>
      <OurBlogs/>
    
    </>
  );
};

export default HomePage;
