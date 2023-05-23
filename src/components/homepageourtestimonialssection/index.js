import { CardMedia, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Testimonial1 from "../../assets/testimonial1.png";
import Testimonial2 from "../../assets/testimonial2.png";
import Testimonial3 from "../../assets/testimonial3.png";
import Testimonial4 from "../../assets/testimonial4.png";
import Testimonial5 from "../../assets/testimonial5.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";

import { Pagination } from "swiper";
const testimonials = [
  {
    image: Testimonial1,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS.",
  },
  {
    image: Testimonial2,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS.",
  },
  {
    image: Testimonial4,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS.",
  },
  {
    image: Testimonial3,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS.",
  },
  {
    image: Testimonial5,
    description:
      "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS.",
  },
];
const OurTestimonials = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex + 1);
  };
  return (
    <Stack mt={20}>
      <Typography variant="h4" textAlign="center">
        Our Testimonials
      </Typography>
      <Swiper
        slidesPerView={3}
        spaceBetween={"10%"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={styles.swiper}
        onSlideChange={handleSlideChange}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide
            className="clickable"
            key={index}
            onClick={() => setActiveSlideIndex(index)}
          >
            <Stack
              alignItems="center"
              spacing={3}
              className={`${styles.swiperSlide} ${
                index === activeSlideIndex ? styles.activeSlide : ""
              }`}
            >
              <img src={item.image} />
              <Typography width={"90%"} variant="caption" textAlign="center">
                {item.description}
              </Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
};

export default OurTestimonials;
