import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppointmentsTable from "../../components/appointmentstable";
import api from "../../api/api";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const getAppointments = async () => {
    const response = await api.get("/appointments");
    return response.data;
  };
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate        = useNavigate();

  const fetchUserName = async () => {
    try {
      const q    = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc  = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    const getAllAppointments = async () => {
      const allAppointments = await getAppointments();
      if (allAppointments) setAppointments(allAppointments);
    };

    if (user) {
      // User is authenticated
      fetchUserName();
      getAllAppointments();
    } else {
      // User is not authenticated
      navigate("/login"); // Redirect to login page or handle as per your requirements
    }
  }, [user, loading, navigate]);

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
