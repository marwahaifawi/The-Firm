import React from 'react';
import { Container, Stack, Stepper, Typography } from "@mui/material";
import IconCard from "../../components/iconcard";
import windows from "../../assets/widowsImg.png";
import googleHovered from "../../assets/hoverdGoogleImg.png"
import Google from "../../assets/google.jpg"
import WindowsHovered from "../../assets/windowsHovered.webp"
import Windows from "../../assets/widowsImg.png"
import FireFoxHovered from "../../assets//hoveredFirFox.jpg"
import FireFox from "../../assets/firefoxImg.png"
import Safari from "../../assets/safariImg.png"
import SafariHovered from "../../assets/hoveredSafari.png"
import Grid from "@mui/material/Grid"
const OurPartnersSection = () => {
  return (
    <Stack justifyContent="center" alignItems="center" spacing={3}>
    <Typography variant="h4" textAlign="center">
      Our Partners
    </Typography>
    <Container alignItems='center' justifyContent='center'>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
      >
        <Grid justifyContent="center"
        alignItems="center" item xs={12} sm={6} md={3}>
          <IconCard iconImage={Google} hoverImage={googleHovered} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <IconCard iconImage={Windows} hoverImage={WindowsHovered} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <IconCard iconImage={FireFox} hoverImage={FireFoxHovered} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
        <IconCard iconImage={Safari} hoverImage={SafariHovered} />
        </Grid>
      </Grid>
    </Container>
  </Stack>
  );
}

export default OurPartnersSection;