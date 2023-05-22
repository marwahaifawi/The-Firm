import React from "react";
import { Container, Typography } from "@mui/material";
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
    title: "Maximizing Training ROI : How LMS Boosts",
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
    <Stack spacing={5} mt={20}>
      <Typography variant="h4" textAlign="center">
        Our Blogs
      </Typography>
      <Stack
        alignItems={{
          xs: "center",
          sm: "center",
          md: "stretch",
          lg: "stretch",
        }}
        justifyContent="center"
        direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
        spacing={4}
      >
        {blogs.map((item, index) => (
          <BlogCard
            key={index}
            name={item.name}
            avatar={item.avatar}
            image={item.image}
            description={item.description}
            date={item.date}
            title={item.title}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default OurBlogs;
