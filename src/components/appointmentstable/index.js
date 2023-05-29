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


const AppointmentsTable = ({ appointments }) => {

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
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell>{appointment.solution}</TableCell>
              <TableCell>{appointment.name}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell>{appointment.time}</TableCell>
              <TableCell>{appointment.additionalInfo}</TableCell>
              <TableCell>
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton color={"error"}>
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
