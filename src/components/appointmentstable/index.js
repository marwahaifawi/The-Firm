import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

const AppointmentsTable = ({ appointments }) => {
  const handleDelete = (id) => {
    const apiUrl = `http://localhost:3006/appointments/${id}`;
    axios.delete(apiUrl).then((response) => {
      // Handle the successful deletion, such as updating the appointments list
      console.log("Appointment deleted successfully");
    }).catch((error) => {
      // Handle the error, such as displaying an error message
      console.error("Error deleting appointment:", error);
    });
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Solution's Type</TableCell>
            <TableCell>Instructor's Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Additional Information</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>{appointment.solution}</TableCell>
              <TableCell>{appointment.instructorName}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.additionalInfo}</TableCell>
              <TableCell>{appointment.phone}</TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton
                  color={"error"}
                  onClick={() => handleDelete(appointment.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppointmentsTable;
