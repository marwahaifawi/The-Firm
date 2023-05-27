import React from "react";
import { Grid} from "@mui/material";
import Coaching from "../../assets/coachingSolutionImg.png";
import DigitalPartner from "../../assets/digitalPartnerSolutionImg.png";
import SEO from "../../assets/seoSolutionImg.png";
import { Stack } from "@mui/material";
import SolutionsDescriptions from "../solutionpagesolutionsdescriptions";

const solutions = [
    {
      title: "Coaching",
      image: Coaching,
      description:
        "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
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
const SolutionDescription = () => {
  return (
    <Stack spacing={5} mt={20} alignItems="center" justifyContent="center">
    <Grid container spacing={4} alignItems={"stretch"}>
      {solutions.map((item, index) => (
          <SolutionsDescriptions
            image={item.image}
            description={item.description}
            solution={item.title}
            direction={index%2 ? "row-reverse" :"row"}
          />
      ))}
    </Grid>
  </Stack>
  );
};

export default SolutionDescription;
