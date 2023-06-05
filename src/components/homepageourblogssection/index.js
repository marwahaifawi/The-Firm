import React from "react";
import { Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BlogCard from "../blogcard";
import { Stack } from "@mui/material";
import api from "../../api/api";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    const response = await api.get("/blogs");
    return response.data;
  };
  useEffect(() => {
    const getAllBlogs = async () => {
      const allBlogs = await getBlogs();
      if (allBlogs) setBlogs(allBlogs);
    };
    getAllBlogs();
  }, []);
  return (
    <Stack spacing={5} mt={20} alignItems="center" justifyContent="center">
      <Typography variant="h4" textAlign="center">
        Our Blogs
      </Typography>
      <Grid container spacing={4} alignItems={"stretch"}>
        {blogs.map((item, index) => (
          <Grid
            item
            lg={4}
            md={6}
            sm={6}
            xs={12}
            key={index}
            sx={{ display: "flex" }}
          >
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
