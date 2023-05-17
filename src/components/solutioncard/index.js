import React from 'react';
import { Box, Stack, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Typography } from "@mui/material";
const SolutionCard = ({item}) => {
    const Item = styled(Paper)(() => ({
        textAlign: "center",
        width: "11rem",
        height: "15rem",
        background: "#FFFFFF",
        border: "1px solid rgba(15, 179, 175, 0.4)",
        boxShadow: " -22px 23px 30px rgba(0, 0, 0, 0.05)",
        borderRadius: "30px",
        padding:'2rem',
      }));
  return (
    <Grid item xs={5}>
    <Item>
      <img src={item.icon} alt="solutionIcon" />
      <Typography p={1} variant="h5">{item.title}</Typography>
      <Typography variant="body1">{item.description}</Typography>

    </Item>
  </Grid>
  );
}

export default SolutionCard;
