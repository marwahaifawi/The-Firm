import { CardMedia, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Testimonial1 from "../../assets/testimonial1.png";
import Testimonial2 from "../../assets/testimonial2.png";
import Testimonial3 from "../../assets/testimonial3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./index.module.css";

import { Pagination } from "swiper";
const testimonials = [
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial2,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial3,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
  },
  {
    image: Testimonial2,
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
        className={styles.swiper}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack alignItems="center" spacing={2}>
              <CardMedia sx={{ height: 100, width: 100 }} image={item.image} />
              <Typography textAlign="center">{item.description}</Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default OurTestimonials;
