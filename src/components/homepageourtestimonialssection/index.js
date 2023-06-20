import {Stack, Typography } from "@mui/material";
import React, { useState  , useEffect} from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./index.module.css";
import api from "../../api/api";
import { Pagination } from "swiper";

const OurTestimonials = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [testimonials, setTestimonials] = useState([]);
  const getTestimonials = async () => {
    const response = await api.get("/testimonials");
    return response.data;
  };
  useEffect(() => {
    const getAllTestimonials = async () => {
      const allBlogs = await getTestimonials();
      if (allBlogs) setTestimonials(allBlogs);
    };
    getAllTestimonials();
  }, []);
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
              <img alt="testimonialImg" src={item.image} />
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
