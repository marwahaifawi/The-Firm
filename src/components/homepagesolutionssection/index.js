import React from "react";
import SolutionCard from "../../components/solutioncard";
import ButtonApp from "../../shared/button";
import { Stack, Grid } from "@mui/material";
import { Container, Typography } from "@mui/material";
import CoachingIcon from "../../assets/coachingIcon.svg";
import DigitalPartner from ".././../assets/digitalPartnerIcon.svg";
import SEO from "../../assets/seoIcon.svg";
import Booking from "../../assets/bookingIcon.svg";
const Solutions = [
  {
    icon: CoachingIcon,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: DigitalPartner,
    title: "Digital Partner",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: SEO,
    title: "SEO",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: Booking,
    title: "Booking",
    description: "Loren rasion gravida auemis bibenua tase",
  },
];
const SolutionsSection = () => {
  return (
    <Container>
      <Stack
        spacing={{ xs: 10, md: 2, lg: 8 }}
        alignItems="center"
        mt={10}
        direction={{
          lg: "row",
          md: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        }}
      >
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 1, sm: 1, md: -10, lg: -10 }}
        >
          {Solutions.map((item, index) => (
            <SolutionCard key={index} item={item} />
          ))}
        </Grid>
        <Stack
          spacing={2}
          width={"60%"}
          justifyContent={{ xs: "center", md: "center", lg: "left" }}
          alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
        >
          <Typography
            textAlign={{ xs: "center", md: "center", lg: "left" }}
            variant="h4"
          >
            Perfect Solution for <br /> Your Business
          </Typography>
          <Typography
            textAlign={{ xs: "center", lg: "left" }}
            variant="OVERLINE TEXT"
          >
            Discover optimal solutions for businesses: digital partnerships, SEO
            optimization, online booking, and professional coaching. These
            comprehensive strategies can propel your business forward, increase
            online visibility, streamline customer bookings, and provide expert
            guidance to enhance your success.
          </Typography>
          <ButtonApp variant="contained">Read More</ButtonApp>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SolutionsSection;
