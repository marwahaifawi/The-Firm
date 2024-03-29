import React from "react";
import { Container, Stack, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import IconCard from "../iconcard";
import googleHovered from "../../assets/hoverdGoogleImg.png";
import Google from "../../assets/google.jpg";
import WindowsHovered from "../../assets/windowsHovered.webp";
import Windows from "../../assets/widowsImg.png";
import FireFoxHovered from "../../assets/hoveredFirFox.jpg";
import FireFox from "../../assets/firefoxImg.png";
import Safari from "../../assets/safariImg.png";
import SafariHovered from "../../assets/hoveredSafari.png";

const OurPartnersSection = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3} mt={10}>
      <Typography variant="h4" textAlign="center">
        Our Partners
      </Typography>
      <Container alignItems="center" justifyContent="center">
        <Grid container spacing={1} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.google.com" target="_blank" rel="noopener noreferrer">
              <IconCard iconImage={Google} hoverImage={googleHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
              <IconCard iconImage={Windows} hoverImage={WindowsHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.mozilla.org" target="_blank" rel="noopener noreferrer">
              <IconCard iconImage={FireFox} hoverImage={FireFoxHovered} />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link to="https://www.apple.com/safari/" target="_blank" rel="noopener noreferrer">
              <IconCard iconImage={Safari} hoverImage={SafariHovered} />
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
};

export default OurPartnersSection;
