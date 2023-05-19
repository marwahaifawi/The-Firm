import { CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Testimonial1 from "../../assets/testimonial1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.css";

// import required modules
import { Pagination } from "swiper";
const testimonials = [
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
];
const OurTestimonials = () => {
  return (
    <Container>
      <Typography variant="h4" textAlign="center">
        Our Testimonials
      </Typography>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Stack alignItems="center" spacing={2}>
            <CardMedia sx={{ height: 100, width: 100 }} image={Testimonial1} />
            <Typography textAlign="center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took type scrambled
              it to make a type specimen book. It has survived not only five
              centuries,
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default OurTestimonials;
