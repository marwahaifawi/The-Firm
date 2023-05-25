import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ButtonApp from "../../shared/button";
const useStyles = makeStyles((theme) => ({
  img: {
    [theme.breakpoints.up("xs")]: {
      width: "0%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "85%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "90%",
    },
    height: "auto",
    objectFit: "cover",
  },
}));
const CaseDetailsHeroSection = ({ caseName, description, image }) => {
  const classes = useStyles();

  return (
    <Stack
      spacing={5}
      alignItems="center"
      mt={15}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
    >
      <Stack spacing={2} width={"50%"} justifyContent="center">
        <Typography textAlign={{ xs: "center", lg: "left " }} variant="h4">
          Our Research &<br /> Case Studies.
        </Typography>
        <Typography
          textAlign={{ xs: "center", lg: "left " }}
          variant="body1"
          lineHeight={2}
        >
          Exploring the frontiers of knowledge, illuminating pathways to
          success:
          <br /> Our research and case studies.
        </Typography>
        <Stack direction={{ lg: "row", md: "row", sm: "column" }} spacing={2}>
          <ButtonApp variant={"contained"}> Digital Partner</ButtonApp>
          <ButtonApp variant={"contained"}> Coaching</ButtonApp>
        </Stack>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={image} className={classes.img} />
      </Stack>
    </Stack>
  );
};

export default CaseDetailsHeroSection;
