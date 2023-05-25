import React, { useState } from "react";
import { Stack, Grid, Container } from "@mui/material";
import ButtonApp from "../../shared/button";
import TextField from "@material-ui/core/TextField";
import MasteringLearningBlogImg from "../../assets/masteringLearningBlogImg.png";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";
import CaseCard from "../casecard";
const CasesFilter = () => {
  const [clicked, setClicked] = useState(0);
  const filters = ["Show All", "Coaching", "Digital Partners", "SEO"];
  const cases = [
    {
      id: 1,
      title: "Mastering Learning Experience",
      image: MasteringLearningBlogImg,
      description:
        "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
    },
    {
      id: 2,
      title: "Driving Workplace Efficiency",
      image: MasteringLearningBlogImg,
      description:
        "Explore how Learning Management Systems (LMS) extend beyond traditional classrooms and support continuing education and professional development. ",
    },
    {
      id: 3,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 4,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 5,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 6,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 7,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 8,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 9,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: MasteringLearningBlogImg,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
  ];
  return (
    <Stack alignItems="center" p={5}>
      <Stack
        spacing={{ lg: 10, md: 10, sm: 5 }}
        direction={{ lg: "row", md: "row", sm: "row" }}
      >
        {filters.map((item, index) => (
          <ButtonApp
            key={index}
            variant={index === clicked ? "contained" : "outlined"}
            onClick={() => setClicked(index)}
          >
            {item}
          </ButtonApp>
        ))}
        <TextField
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Container>
        <Grid
          mt={4}
          container
          alignItems={{
            xs: "center",
            sm: "center",
            md: "stretch",
            lg: "stretch",
          }}
          direction={{ md: "row", lg: "row" }}
          spacing={5}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {cases.map((item) => (
            <Grid item xs={4} key={item.id}>
              <CaseCard
                image={item.image}
                description={item.description}
                title={item.title}
                caseID={item.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

export default CasesFilter;
