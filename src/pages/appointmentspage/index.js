import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppointmentsTable from "../../components/appointmentstable";
import api from "../../api/appointments";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    const response = await api.get("/appointments");
    return response.data;
  };
  useEffect(() => {
    const getAllAppointments = async () => {
      const allAppointments = await getAppointments();
      if (allAppointments) setAppointments(allAppointments);
    };
    getAllAppointments();
  }, []);
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
