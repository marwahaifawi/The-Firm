import React, { useState } from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import SolutionsSection from "../../components/homepagesolutionssection";
import { Stack, Grid, Box, CardMedia } from "@mui/material";
import { Container, Typography } from "@mui/material";
import ButtonApp from "../../shared/button";
import Branding from "../../assets/brandingImg.png";
import BrandingIcon from "../../assets/branding.svg";
import ReportingIcon from "../../assets/reportingicon.svg";
import MarketSearchingIcon from "../../assets/marketresearchicon.svg";

const HomePage = () => {
  const [clicked, setClicked] = useState(0);
  const reasons = [
    {
      name: "Market Research",
      icon: MarketSearchingIcon,
      image: Branding,
      description:
        "Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      name: "Branding",
      icon: BrandingIcon,
      image: Branding,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      name: "Reporting",
      icon: ReportingIcon,
      image: Branding,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
    {
      name: "Data Analysis",
      icon: BrandingIcon,
      image: Branding,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    },
  ];
  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <SolutionsSection />
      <Container>
        <Stack justifyContent="center" alignItems="center" spacing={7}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={4}
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
            <Stack
              spacing={3}
              direction={{ lg: "row", md: "column", sm: "column" }}
            >
              {reasons.map((item, index) => (
                <ButtonApp
                  key={index}
                  variant={index === clicked ? "contained" : "outlined"}
                  // disabled={index !== clicked}
                  onClick={() => setClicked(index)}
                >
                  {item.name}
                </ButtonApp>
              ))}
            </Stack>
          </Stack>
          {clicked !== null && (
            <Stack
              width={"90%"}
              spacing={1}
              alignItems={{
                lg: "flex-start",
                md: "center",
                sm: "center",
                xs: "center",
              }}
              direction={{ lg: "row", md: "column", sm: "column" }}
            >
              <CardMedia
                component="img"
                sx={{ width: "60%" }}
                src={reasons[clicked].image}
                alt="Reason Image"
              />
              <img src={reasons[clicked].icon} />
              <Stack
                paddingTop={"1.5rem"}
                direction="column"
                spacing={5}
                width={"70%"}
              >
                <Typography variant="h6"> {reasons[clicked].name}</Typography>
                <Typography variant="body2">
                  {reasons[clicked].description}
                </Typography>
                <ButtonApp variant="contained">Read More</ButtonApp>
              </Stack>
            </Stack>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
