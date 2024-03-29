import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import HomeImage from "../../assets/homepageHeroSectionImg.png";
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
const HomePageHeroSection = () => {
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
          Get Business <br /> Solutions with The Firm.
        </Typography>
        <Typography
          textAlign={{ xs: "center", lg: "left " }}
          variant="body2"
          lineHeight={2}
        >
          We provide innovative and tailored business solutions to help you
          achieve your goals. <br />
          Our platform offers a comprehensive suite of services designed to
          enhance your productivity, efficiency, and profitability.
        </Typography>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={HomeImage} className={classes.img} />
      </Stack>
    </Stack>
  );
};

export default HomePageHeroSection;
