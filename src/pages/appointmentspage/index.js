import { Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AppointmentsTable from "../../components/appointmentstable";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AppointmentsPage = () => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0]?.data();
      if (data) {
        setName(data.name);
      } else {
        navigate("/login");
      }
    } catch (err) {
      // Handle the error, e.g., display a toast notification or error message within the component
      console.error("Error fetching user data:", err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (user) {
      fetchUserName();
    } else {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  if (loading) {
    // Render a loading indicator or a placeholder component while fetching user data
    return <div>Loading...</div>;
  }

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
        <AppointmentsTable />
      </Container>
    </Stack>
  );
};

export default AppointmentsPage;
