import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import CasesImage from "../../assets/casesPageHeroSectionImg.png";
import { makeStyles } from "@mui/styles";
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
      width: "98%",
    },
    height: "auto",
    objectFit: "cover",
  },
}));
const CasesPageHeroSection = () => {
  const classes = useStyles();

  return (
    <Stack
      spacing={5}
      alignItems="center"
      mt={10}
      direction={{ lg: "row", md: "row", sm: "column", xs: "column" }}
    >
      <Stack spacing={2} width={"50%"} justifyContent="center">
        <Typography textAlign={{ xs: "center", lg: "left " }} variant="h4">
          Our Research &<br /> Case Studies.
        </Typography>
        <Typography textAlign={{ xs: "center", lg: "left " }} variant="body2">
          Exploring the frontiers of knowledge, illuminating pathways to
          success:
          <br /> Our research and case studies.
        </Typography>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={CasesImage} className={classes.img} />
      </Stack>
    </Stack>
  );
};

export default CasesPageHeroSection;
