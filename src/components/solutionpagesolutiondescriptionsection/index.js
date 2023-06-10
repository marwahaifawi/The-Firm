import React from "react";
import { Grid } from "@mui/material";
import Coaching from "../../assets/coachingSolutionImg.png";
import DigitalPartner from "../../assets/digitalPartnerSolutionImg.png";
import SEO from "../../assets/seoSolutionImg.png";
import { Stack } from "@mui/material";
import SolutionsDescriptions from "../solutionpagesolutionsdescriptions";
import solutions from "./solutionsData";
const SolutionDescription = () => {
  return (
    <Stack mt={20} alignItems="center" justifyContent="center">
      <Grid container alignItems={"stretch"}>
        {solutions.map((item, index) => (
          <Grid key={index} mt={8} item>
            <SolutionsDescriptions
              image={item.image}
              description={item.description}
              solution={item.title}
              direction={index % 2 ? "row-reverse" : "row"}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default SolutionDescription;
