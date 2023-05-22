import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import ButtonApp from "../../shared/button";

const subjects = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const GetInTouch = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "500px",
        width: "100%",
        backgroundImage: `url('../../assets/getInTouchImg.png')`,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          rowGap: "2rem",
          justifyContent: "center",
          borderRadius: "15px",
          backgroundColor: "red",
          height: "50%",
          width: "50%",
          padding: "10rem 1rem 5rem 1rem",
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
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
            label="Select"
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
