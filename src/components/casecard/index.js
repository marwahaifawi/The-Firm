import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";
import ButtonApp from "../../shared/button";
import { Box } from "@mui/material";
const CaseCard = ({ image, description, title, caseID }) => {
  const navigate = useNavigate();
  const handleReadMore = () => {
    navigate(`/casesPage/${caseID}`);
  };
  return (
    <Card
      sx={{
        maxWidth: 345,
        paddingTop: 1,
        borderRadius: 2,
        border: "1px solid rgba(15, 179, 175, 0.4)",
        boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.09)",
      }}
    >
      <CardMedia sx={{ height: 200, borderRadius: 5 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography mb={2} variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider variant="middle" />
        <Box sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}>
          <ButtonApp variant={"contained"} onClick={handleReadMore}>
            Read More
          </ButtonApp>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CaseCard;
