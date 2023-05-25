import { Container } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import Case1 from "../../assets/case1.png";
import Case2 from "../../assets/case2.png";
import Case3 from "../../assets/case3.png";
import Case4 from "../../assets/case4.png";
import Case5 from "../../assets/case5.png";
import Case6 from "../../assets/case6.png";
import Case7 from "../../assets/case7.png";
import Case8 from "../../assets/case8.png";
import Case9 from "../../assets/case9.png";
import CaseDetailsHeroSection from "../../components/casedetailsherosection";

const CaseDetailsPage = () => {
  const cases = [
    {
      id: 1,
      title: "Mastering Learning Experience",
      image: Case1,
      description:
        "Dive into the world of Learning Management Systems (LMS) and discover how they revolutionize education. Explore the benefits, features, and implementation of LMS .",
    },
    {
      id: 2,
      title: "Driving Workplace Efficiency",
      image: Case2,
      description:
        "Explore how Learning Management Systems (LMS) extend beyond traditional classrooms and support continuing education and professional development. ",
    },
    {
      id: 3,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case3,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 4,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case4,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 5,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case5,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 6,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case6,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 7,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case7,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 8,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case8,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
    {
      id: 9,
      title: "Maximizing Training ROI : How LMS Boosts",
      image: Case9,
      description:
        "Learn how Learning Management Systems (LMS) maximize return on investment (ROI) for corporate learning programs.",
    },
  ];
  const { caseID } = useParams();
  const singleCase = cases.find((cases) => cases.id === parseInt(caseID));
  const { id, image, title, description } = singleCase;
  return (
    <Container>
      <CaseDetailsHeroSection
        caseName={title}
        description={description}
        image={image}
      />
    </Container>
  );
};

export default CaseDetailsPage;
