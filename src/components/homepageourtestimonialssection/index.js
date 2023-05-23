import { CardMedia, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import FirstTestimonial from "../../assets/testimonial1.png";
import SecondTestimonial from "../../assets/testimonial2.png";
import ThirdTestimonial from "../../assets/testimonial3.png";
import FourthTestimonial from "../../assets/testimonial4.png";
import FifthTestimonial from "../../assets/testimonial5.png";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./index.module.css";

import { Pagination } from "swiper";
const testimonials = [
  {
    image: FirstTestimonial,
    description:
      "The platform's user-friendly interface and comprehensive features have made it incredibly convenient for me to create and deliver engaging training modules. The ability to track learners' progress and provide real-time feedback has greatly improved the effectiveness of my training sessions. I highly recommend this LMS platform to fellow trainers looking to elevate their training programs.",
  },
  {
    image: SecondTestimonial,
    description:
      "As a busy professional, finding time for continuous learning can be a challenge. However, ever since I started using the LMS platform, my learning journey has become incredibly flexible and convenient. The platform's mobile compatibility allows me to access training materials anytime, anywhere, using my smartphone or tablet. The interactive modules and self-paced learning approach have made the process engaging and enjoyable.",
  },
  {
    image: ThirdTestimonial,
    description:
      "The platform's robust features, such as personalized learning paths and extensive reporting, have revolutionized the way we train our employees. The ability to tailor training programs to individual needs has resulted in improved knowledge retention and performance. Moreover, the detailed reports and analytics have allowed us to make data-driven decisions to enhance our training initiatives. I can confidently say that this LMS platform has become an indispensable tool for our organization's growth and development.",
  },
  {
    image: FourthTestimonial,
    description:
      "As a learner with diverse interests, I have found the LMS platform to be a treasure trove of knowledge. The platform's vast library of courses covers a wide range of subjects, allowing me to explore different areas of interest. The courses are well-structured, engaging, and filled with valuable content. The platform's intuitive search and recommendation features make it easy for me to discover new courses that align with my learning goals. If you're someone who values lifelong learning and wants access to a plethora of quality courses, this LMS platform is the perfect choice.",
  },
  {
    image: FifthTestimonial,
    description:
      "Our organization recently transitioned to the LMS platform, and it has been a game-changer for our employee onboarding process. The platform's onboarding modules and assessments have streamlined the training process, ensuring that new hires receive a consistent and comprehensive introduction to our organization. The platform's interactive elements and multimedia features have made the onboarding experience engaging and memorable. We have received positive feedback from our new employees, who appreciate the user-friendly interface and the platform's ability to track their progress.",
  },
];
const OurTestimonials = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex + 1);
  };
  return (
    <Container>
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
          <SwiperSlide key={index}>
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
    </Container>
  );
};

export default OurTestimonials;
