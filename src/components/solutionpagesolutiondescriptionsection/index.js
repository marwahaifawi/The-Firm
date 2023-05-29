import React from "react";
import { Grid } from "@mui/material";
import Coaching from "../../assets/coachingSolutionImg.png";
import DigitalPartner from "../../assets/digitalPartnerSolutionImg.png";
import SEO from "../../assets/seoSolutionImg.png";
import { Stack } from "@mui/material";
import SolutionsDescriptions from "../solutionpagesolutionsdescriptions";

const solutions = [
  {
    title: "Coaching",
    image: Coaching,
    description:
      "The Coaching solution provided by The Firm involves personalized guidance and support to help individuals or teams enhance their skills, performance, and overall professional development. The coaching sessions can cover various areas such as leadership development, communication skills, goal setting, time management, team collaboration, and personal growth. The Firm's coaches will work closely with you to identify your specific needs and create a customized coaching plan to help you achieve your desired outcomes.",
  },
  {
    title: "Digital Partner",
    image: DigitalPartner,
    description:
      "The Digital Partner solution typically involves a strategic collaboration between your business and The Firm. As a Digital Partner, The Firm works closely with you to identify your digital needs, develop a comprehensive digital strategy, and provide ongoing support and guidance in executing that strategy. This may include areas such as website development, online marketing, social media management, content creation, and overall digital presence enhancement. The Digital Partner solution aims to leverage digital technologies and practices to help your business thrive in the digital landscape.",
  },
  {
    title: "SEO",
    image: SEO,
    description:
      " (Search Engine Optimization): SEO is a crucial aspect of digital marketing that focuses on optimizing your website's visibility and ranking on search engine results pages. The SEO solution offered by The Firm involves a range of techniques and strategies to improve your website's organic (non-paid) search engine rankings. This includes keyword research, on-page optimization, technical website optimization, link building, content optimization, and ongoing analysis and refinement. The goal of SEO is to increase your website's visibility, attract more relevant organic traffic, and drive conversions.",
  },
];
const SolutionDescription = () => {
  return (
    <Stack mt={20} alignItems="center" justifyContent="center">
      <Grid container alignItems={"stretch"}>
        {solutions.map((item, index) => (
          <Grid mt={8} item>
            <SolutionsDescriptions
              image={item.image}
              description={item.description}
              solution={item.title}
              direction={index % 2 ? "row-reverse" : "row"}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default SolutionDescription;
