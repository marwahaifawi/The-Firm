import React, { useState } from "react";
import { Stack, CardMedia } from "@mui/material";
import { Typography } from "@mui/material";
import ButtonApp from "../../shared/button";
import Branding from "../../assets/brandingImg.png";
import BrandingIcon from "../../assets/branding.svg";
import Reporting from "../../assets/reporting.png";
import ReportingIcon from "../../assets/reportingicon.svg";
import MarketResearch from "../../assets/marhetresearch.png";
import MarketSearchingIcon from "../../assets/marketresearchicon.svg";
import DataAnalysis from "../../assets/dataanalysis.png";
import DataAnalysisIcon from "../../assets/dataanalysisIcon.svg";

const ReasonsToChooseUs = () => {
  const [clicked, setClicked] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const reasons = [
    {
      name: "Market Research",
      icon: MarketSearchingIcon,
      image: MarketResearch,
      description:
        "Market research helps you gain valuable insights into your target audience's preferences, needs, and behaviors. By conducting research, you can identify your target market's demographics, interests, and purchasing habits, enabling you to tailor your products or services to meet their specific demands.",
    },
    {
      name: "Branding",
      icon: BrandingIcon,
      image: Branding,
      description:
        "Our firm specializes in creating professional and visually appealing websites that align with your brand identity. We understand the importance of a strong brand presence and design websites that reflect your company's values, mission, and unique selling points.",
    },
    {
      name: "Reporting",
      icon: ReportingIcon,
      image: Reporting,
      description:
        "Reports enable businesses to track their progress towards set goals and objectives. By comparing actual performance against targets, reports highlight areas where the business is excelling and areas that require improvement.",
    },
    {
      name: "Data Analysis",
      icon: DataAnalysisIcon,
      image: DataAnalysis,
      description:
        "Data analysis provides valuable information that helps businesses make informed decisions. By analyzing data patterns, trends, and correlations, organizations can identify opportunities, anticipate market shifts, and make strategic choices to optimize their operations and achieve their goals.",
    },
  ];

  const handleReadMore = () => {
    setExpanded(!expanded); // Toggle the expanded state
  };

  return (
    <Stack mt={20} justifyContent="center" alignItems="center" spacing={7}>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={4}
        width={"64%"}
      >
        <Typography variant="h4" textAlign="center">
          Reason to Choose Us
        </Typography>
        <Typography textAlign="center" variant="OVERLINE TEXT" lineHeight={2}>
          Experience excellence, trust the difference: Choose us as your
          preferred partner for unparalleled legal solutions and a track record
          of success.
        </Typography>
        <Stack
          spacing={3}
          direction={{ lg: "row", md: "column", sm: "column" }}
        >
          {reasons.map((item, index) => (
            <ButtonApp
              key={index}
              variant={index === clicked ? "contained" : "outlined"}
              onClick={() => setClicked(index)}
            >
              {item.name}
            </ButtonApp>
          ))}
        </Stack>
      </Stack>
      {clicked !== null && (
        <Stack
          width={"90%"}
          spacing={1}
          alignItems={{
            lg: "flex-start",
            md: "center",
            sm: "center",
            xs: "center",
          }}
          direction={{ lg: "row", md: "column", sm: "column" }}
        >
          <CardMedia
            component="img"
            sx={{ width: "60%" }}
            src={reasons[clicked].image}
            alt="Reason Image"
          />
          <img src={reasons[clicked].icon} alt="reasonImage" />
          <Stack
            paddingTop={"1.5rem"}
            direction="column"
            spacing={3}
            width={"70%"}
          >
            <Typography variant="h6"> {reasons[clicked].name}</Typography>
            <Typography variant="body2" lineHeight={2}>
              {expanded
                ? reasons[clicked].description
                : reasons[clicked].description.substring(0, 150) + "..."}
            </Typography>
            <ButtonApp variant="contained" onClick={handleReadMore}>
              {expanded ? "Read Less" : "Read More"}
            </ButtonApp>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
};

export default ReasonsToChooseUs;
