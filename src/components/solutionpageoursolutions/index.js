import React from "react";
import { Grid, Typography } from "@mui/material";
import Coaching from "../../assets/coachingSolutionImg.png";
import DigitalPartner from "../../assets/digitalPartnerSolutionImg.png";
import SEO from "../../assets/seoSolutionImg.png";
import { Stack } from "@mui/material";
import BookingCard from "../bookingcard";

const solutions = [
  {
    title: "Coaching",
    image: Coaching,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    title: "Digital Partner",
    image: DigitalPartner,
    description:
      "Explore how Learning Management Systems (LMS) extend beyond traditional classrooms and support continuing education and professional development. ",
  },
  {
    title: "SEO",
    image: SEO,
    description:
      "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
  },
];
const OurSolutionsCards = () => {
  return (
    <Stack spacing={5} mt={20} alignItems="center" justifyContent="center">
      <Typography variant="h4" textAlign="center">
        Book An Appointment
      </Typography>
      <Grid container spacing={4} alignItems={"stretch"}>
        {solutions.map((item, index) => (
          <Grid
            item
            lg={4}
            md={6}
            sm={6}
            xs={12}
            key={index}
            sx={{ display: "flex" }}
          >
            <BookingCard
              image={item.image}
              description={item.description}
              title={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurSolutionsCards;
