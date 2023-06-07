import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SolutionCard = ({ item }) => {
  const Item = styled(Paper)(() => ({
    textAlign: "center",
    width: "55%",
    height: "15rem",
    background: "#FFFFFF",
    border: "1px solid rgba(15, 179, 175, 0.4)",
    boxShadow: " -22px 23px 30px rgba(0, 0, 0, 0.05)",
    borderRadius: "30px",
    padding: "2rem",
  }));

  const StyledLink = styled(Link)(() => ({
    textDecoration: "none", // Remove the underline
  }));

  return (
    <Grid
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      item
      xs={12}
      sm={6}
      md={6}
      lg={6}
    >
      <StyledLink to={item.path}>
        <Item className="clickable">
          <img src={item.icon} alt="solutionIcon" />
          <Typography p={1} variant="h5">
            {item.title}
          </Typography>
          <Typography variant="body1">{item.description}</Typography>
        </Item>
      </StyledLink>
    </Grid>
  );
};

export default SolutionCard;
