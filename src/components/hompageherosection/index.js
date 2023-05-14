import React from 'react';
import Stack from "@mui/material/Stack";
import { Container, Typography } from "@mui/material";
import HomeImage from "../../assets/homepageHeroSectionPic.png";
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
    <Container>
    <Stack
      spacing={5}
      alignItems="center"
      mt={10}
      direction={{ lg: "row", md: "row", sm: "column" ,xs: "column" }}
    >
      <Stack spacing={2} width={"50%"} justifyContent="center">
        <Typography textAlign={{xs:"center" , lg: "left "}} variant="h4">
          Get Business <br /> Solutions with The Firm.
        </Typography>
        <Typography textAlign={{xs:"center" , lg: "left "}} variant="body2">
          Lorem Ipsum is simply dummy text of the printing <br />
          and typesetting industry. Lorem Ipsum has been <br />
          the industry's standard dummy.
        </Typography>
      </Stack>
      <Stack alignItems="center" width={"50%"}>
        <img alt="heroSectionPic" src={HomeImage} className={classes.img} />
      </Stack>
    </Stack>
  </Container>
  );
}

export default HomePageHeroSection;
