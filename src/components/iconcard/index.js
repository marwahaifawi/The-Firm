import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const IconCard = ({ iconImage, hoverImage }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    height: "120px",
    width: "240px",
    borderRadius: 20,
    boxShadow: "0px 10px 20px rgba(5, 5, 5, 0.08)",
    display: "flex",
    justifyContent: "center",
    backgroundImage: iconImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "&:hover": {
      backgroundImage: hoverImage,
    },
  }));
  const styles = {
    imageContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    image: {
      maxWidth: "100%",
      maxHeight: "100%",
    },
  };
  const imageSrc = hover ? hoverImage : iconImage;

  return (
    <Box
      sx={{
        p: 2,
        display: "grid",
        gridTemplateColumns: { md: "1fr 1fr" },
        gap: 2,
        justifyContent: "center",
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Item elevation={6} iconImage={iconImage} hoverImage={hoverImage}>
        <div style={styles.imageContainer}>
          <img alt="partnerCompanyImage" src={imageSrc} style={styles.image} />
        </div>
      </Item>
    </Box>
  );
};

export default IconCard;
