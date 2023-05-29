import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavBar from "../components/navbar";
import SocialBar from "../components/socialbar";

const FooterApp = () => {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Solutions", link: "/solutions" },
    { text: "Cases", link: "/casesPage" },
    { text: "Appointments", link: "/Appointments" },
  ];
  const socials = [
    {
      name: "facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "twitter",
      url: "https://www.twitter.com",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com",
    },
    {
      name: "pinterest",
      url: "https://www.pinterest.com",
    },
  ];
  return (
    <Stack
      direction="column"
      alignItems="center"
      mt={10}
      spacing={4}
      padding={15}
    >
      <Box>
        <Logo />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 1, sm: 3, md: 4 }}
        display={{ xs: "none", sm: "none", md: "block", lg: "block" }}
      >
        {navItems.map((item , index) => (
          <NavBar color="#1E1E1E" underline="hover" key={index} linkTo={item.link}>
            {item.text}
          </NavBar>
        ))}
      </Stack>
      <SocialBar socials={socials} />
      <Typography variant="overline" component='p' textAlign="center">
        Copyrights ©2020 Thefirm. All Right Reserved
      </Typography>
    </Stack>
  );
};

export default FooterApp;
