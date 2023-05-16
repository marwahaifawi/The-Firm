import React from "react";
import HomePageHeroSection from "../../components/hompageherosection";
import OurPartnersSection from "../../components/ourpartnerssection";
import { Box, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Container, Typography } from "@mui/material";
import CoachingIcon from "../../assets/coachingIcon.svg";
const Solutions = [
  {
    icon: CoachingIcon ,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
];
const Item = styled(Paper)(({ theme }) => ({
  textAlign: "center",
  width: "16rem",
  height: "20rem",
  padding:"1rem",
  background: "#FFFFFF",
  border: "1px solid rgba(15, 179, 175, 0.4)",
  boxShadow: " -22px 23px 30px rgba(0, 0, 0, 0.05)",
  borderRadius: "30px",
  color: theme.palette.text.secondary,
}));

const HomePage = () => {
  return (
    <>
      <HomePageHeroSection />
      <OurPartnersSection />
      <Container>
        <Stack
          spacing={5}
          alignItems="center"
          mt={10}
          direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
        >
          <Grid
            container
            rowSpacing={5}
            columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 5 }}
          >
            {Solutions.map((item, index) => (
              <Grid item xs={6}>
                <Item>
                  <img src={item.icon} alt="solutionIcon" />
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="body1">{item.description}</Typography>

                </Item>
              </Grid>
            ))}
          </Grid>
          <Stack spacing={2} width={"50%"} justifyContent="center">
            <Typography textAlign={{ xs: "center", lg: "left " }} variant="h4">
              Get Business <br /> Solutions with The Firm.
            </Typography>
            <Typography
              textAlign={{ xs: "center", lg: "left " }}
              variant="body2"
            >
              Lorem Ipsum is simply dummy text of the printing <br />
              and typesetting industry. Lorem Ipsum has been <br />
              the industry's standard dummy.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default HomePage;
