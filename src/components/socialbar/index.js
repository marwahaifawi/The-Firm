import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack, Box } from "@mui/material";

const useStyles = makeStyles(() => ({
  iconButton: {
    color: "black",
    "&:hover": {
      color: "primary",
    },
  },
}));

const SocialBar = ({ socials }) => {
  const classes = useStyles();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <Stack direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}>
      {socials.map(({ name, url }, index) => {
        let icon;
        switch (name) {
          case "facebook":
            icon = <FacebookIcon />;
            break;
          case "twitter":
            icon = <TwitterIcon />;
            break;
          case "youtube":
            icon = <YouTubeIcon />;
            break;
          case "linkedin":
            icon = <LinkedInIcon />;
            break;
          case "pinterest":
            icon = <PinterestIcon />;
            break;
          default:
            icon = null;
        }
        return (
          <IconButton
            key={name}
            className={classes.iconButton}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open(url, "_blank")}
          >
            {hoveredIndex === index ? (
              <Box color="primary.main">{icon}</Box>
            ) : (
              <Box>{icon}</Box>
            )}
          </IconButton>
        );
      })}
    </Stack>
  );
};

export default SocialBar;
