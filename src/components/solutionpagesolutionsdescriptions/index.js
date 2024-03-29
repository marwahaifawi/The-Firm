import React from "react";
import { Stack, Typography } from "@mui/material";
const SolutionsDescriptions = ({ solution, description, image, direction }) => {
  return (
    <Stack
      direction={{ lg: direction, md: direction, sm: "column", xs: "column" }}
      alignItems={"center"}
      justifyContent={"space-evenly"}
      p={"1rem"}
      spacing={5}
    >
      <Stack width={"100%"} p={"1rem"}>
        <Typography  textAlign={"center"} gutterBottom variant="h5">
          {solution}
        </Typography>
        <Typography textAlign={"center"} variant="body2" lineHeight={2.5}>
          {description}
        </Typography>
      </Stack>
      <img alt="solutionImage" src={image} />
    </Stack>
  );
};

export default SolutionsDescriptions;
