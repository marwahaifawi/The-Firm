import React from "react";
import {Grid, Typography} from "@mui/material";
import BlogCard from "../blogcard";
import MasteringLearningBlogImg from "../../assets/masteringLearningBlogImg.png";
import DrivingWorkplaceBlogImg from "../../assets/drivingWorkplaceBlogImg.png";
import MaximizingTrainingImg from "../../assets/maximizingTrainingImg.png";
import AlexAvatar from "../../assets/alexAvatar.png";
import MohAvatar from "../../assets/mohAvatar.png";
import MarwaAvatar from "../../assets/marwaAvatar.png";
import { Stack } from "@mui/material";

const blogs = [
  {
    title: "Mastering Learning Experience",
    name: "Alex Liones",
    avatar: AlexAvatar,
    image: MasteringLearningBlogImg,
    date: "28,Aug 2020, 09:48:00",
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    title: "Driving Workplace Efficiency",
    avatar: MohAvatar,
    name: "Moh Jess",
    image: DrivingWorkplaceBlogImg,
    date: "28,Aug 2020, 09:48:00",
    description:
      "Explore how Learning Management Systems (LMS) extend beyond traditional classrooms and support continuing education and professional development. ",
  },
  {
    title: "Maximizing Training ROI",
    avatar: MarwaAvatar,
    name: "Marwa Salah",
    image: MaximizingTrainingImg,
    date: "28,Aug 2020, 09:48:00",
    description:
      "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
  },
];
const OurBlogs = () => {
  return (
    <Stack spacing={5} mt={20}  alignItems="center"  justifyContent='center'>
      <Typography variant="h4" textAlign="center">
        Our Blogs
      </Typography>
      <Grid container spacing={4} alignItems={"stretch"} >
        {blogs.map((item, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12} key={index} sx={{ display: 'flex'}}>
            <BlogCard
              name={item.name}
              avatar={item.avatar}
              image={item.image}
              description={item.description}
              date={item.date}
              title={item.title}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurBlogs;
