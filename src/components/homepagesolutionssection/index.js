import React from "react";
import SolutionCard from "../../components/solutioncard";
import ButtonApp from "../../shared/button";
import { Stack, Grid } from "@mui/material";
import { Container, Typography } from "@mui/material";
import CoachingIcon from "../../assets/coachingIcon.svg";
const Solutions = [
  {
    icon: CoachingIcon,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: CoachingIcon,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: CoachingIcon,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
  {
    icon: CoachingIcon,
    title: "Coaching",
    description: "Loren rasion gravida auemis bibenua tase",
  },
];
const SolutionsSection = () => {
  return (
    <Container>
      <Stack
          spacing={{ xs: 10, md: 2, lg: 0.5 }}
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
          columnSpacing={{ xs: 1, sm: 1, md: 0, lg: 0 }}
        >
          {Solutions.map((item, index) => (
            <SolutionCard key={index} item={item} />
          ))}
        </Grid>
        <Stack
          spacing={2}
          width={"50%"}
          justifyContent={{ xs: "center", md: "center", lg: "left" }}
          alignItems={{xs: "center", md: "center",lg:"flex-start"}}
        >
          <Typography
            textAlign={{ xs: "center", md: "center", lg: "left" }}
            variant="h4"
          >
            Perfect Solution for <br /> Your Business
          </Typography>
          <Typography
            textAlign={{ xs: "center", lg: "left " }}
            variant="OVERLINE TEXT"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </Typography>
          <ButtonApp variant="contained">Read More</ButtonApp>
        </Stack>
      </Stack>
    </Container>
  );
};

export default SolutionsSection;
