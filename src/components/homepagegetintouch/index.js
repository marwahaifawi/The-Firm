import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Stack, Typography } from "@mui/material";
import ButtonApp from "../../shared/button";

const subjects = [
  {
    value: "Cases",
    label: "Cases",
  },
  {
    value: "Blogs",
    label: "Blogs",
  },
  {
    value: "Solutions",
    label: "Solutions",
  },
  {
    value: "Appointments",
    label: "Appointments",
  },
];

const GetInTouch = () => {
  return (
    <Stack>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5rem",
          rowGap: "3rem",
          borderRadius: "15px",
          boxShadow: "0px 19px 34px 14px rgba(0, 0, 0, 0.06)",
          padding: "5rem 2rem 5rem 2rem",
          "& .MuiTextField-root": { m: 2, width: "30ch" },
        }}
        noValidate
        autoComplete="no"
      >
        <Typography variant="h4" textAlign="center">
          Get In Touch
        </Typography>

        <div>
          <TextField
            id="standard-required"
            label="Name"
            defaultValue="Your Name"
            variant="standard"
          />
          <TextField
            id="standard-required"
            label="Email"
            defaultValue="Your Email"
            variant="standard"
          />
        </div>
        <div>
          <TextField
            id="standard-required"
            label="Phone"
            defaultValue="05********"
            variant="standard"
          />
          <TextField
            id="standard-select-currency"
            select
            label="Subject"
            defaultValue=""
            variant="standard"
          >
            {subjects.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div>
          <ButtonApp variant="contained">Submit</ButtonApp>
        </div>
      </Box>
    </Stack>
  );
};

export default GetInTouch;
