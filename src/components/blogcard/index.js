import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
const BlogCard = ({ image, name, description, avatar, date, title }) => {
  return (
    <Card
      className="clickable"
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
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Divider variant="middle" />
        <CardHeader
          avatar={<Avatar alt="name" src={avatar} />}
          title={name}
          subheader={date}
        ></CardHeader>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
