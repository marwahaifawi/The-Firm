import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import AppointmentsTable from "../../components/appointmentstable";

const AppointmentsPage = () => {
  const appointments = [
    {
      date: "2023-05-23",
      time: "10:00 AM",
      name: "John Doe",
      solution: "SEO",
      additionalInfo: "Lorem ipsum dolor sit amet",
    },
    // Add more appointment objects as needed
  ];
  return (
    <Stack>
      <Typography
        gutterBottom
        mt={20}
        textAlign={"center"}
        variant="h4"
        color={"primary"}
      >
        Your Appointments
      </Typography>
      <Container mt={5}>
        <AppointmentsTable appointments={appointments} />
      </Container>
    </Stack>
  );
};

export default AppointmentsPage;
