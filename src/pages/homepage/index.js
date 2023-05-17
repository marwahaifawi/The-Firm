import React, { useState } from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import { Stack, Grid } from "@mui/material";
import { Container, Typography } from "@mui/material";
import ButtonApp from "../../shared/button";

const HomePage = () => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <Container>
        <Stack justifyContent="center" alignItems="center" spacing={3}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={3}
            width={"64%"}
          >
            <Typography variant="h4" textAlign="center">
              Reason to Choose Us
            </Typography>
            <Typography textAlign="center" variant="OVERLINE TEXT">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </Typography>
            <Stack spacing={2} direction="row">
              {[1, 2, 3, 4].map((item, index) => (
                <ButtonApp
                  key={index}
                  onClick={handleButtonClick}
                  variant={clicked ? "outlined" : "contained"}
                  setClicked={setClicked}
                >
                  Market Research
                </ButtonApp>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
