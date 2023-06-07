import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonApp from "../../shared/button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import axios from "axios";
import { Alert } from "@mui/material";

const steps = [
  {
    label: "Additional Personal Info",
    fields: [
      { name: "phone", label: "Phone", type: "phone" },
      { name: "role", label: "Role", type: "text" },
    ],
    menuItems: [
      { value: "Role 1", label: "Role 1" },
      { value: "Role 2", label: "Role 2" },
      { value: "Role 3", label: "Role 3" },
    ],
  },
  {
    label: "Appointment Details",
    fields: [
      { name: "date", label: "Date", type: "date" },
      { name: "time", label: "Time", type: "time" },
      { name: "instructorName", label: "Instructor Name", type: "text" },
    ],
    menuItems: [
      { value: "Instructor 1", label: "Instructor 1" },
      { value: "Instructor 2", label: "Instructor 2" },
      { value: "Instructor 3", label: "Instructor 3" },
    ],
  },
  {
    label: "Finish",
    fields: [
      { name: "additionalInfo", label: "Additional Information", type: "text" },
    ],
  },
];

const BookingStepper = ({ onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = useState(0);
  const [appointmentData, setAppointmentData] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});

  const handleNext = () => {
    const currentStepFields = steps[activeStep].fields;
    const errors = {};
    currentStepFields.forEach((field) => {
      if (!appointmentData[field.name]) {
        errors[field.name] = "This field is required";
      }
    });

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
    } else {
      setFieldErrors({});
      if (activeStep === steps.length - 1) {
        createAppointment(appointmentData)
          .then(() => {
            // Successful API call, perform any necessary actions (e.g., show a success message)
            onClose();
          })
          .catch((error) => {
            // Error handling (e.g., show an error message)
            console.error("Error creating appointment:", error);
          });
      } else {
        // Proceed to the next step
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      }
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createAppointment = (appointmentData) => {
    const apiUrl = "http://localhost:3006/appointments";
    const headers = {
      "Content-Type": "application/json",
    };
    return axios.post(apiUrl, appointmentData, { headers });
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isMobile ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.fields.map((field) =>
                  field.name === "instructorName" || field.name === "role" ? (
                    <FormControl key={field.name} fullWidth margin="normal">
                      <InputLabel>{field.label}</InputLabel>
                      <Select
                        value={appointmentData[field.name] || ""}
                        onChange={handleInputChange}
                        name={field.name}
                        required
                      >
                        {step.menuItems.map((item) => (
                          <MenuItem key={item.value} value={item.value}>
                            {item.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  ) : (
                    <TextField
                      key={field.name}
                      name={field.name}
                      label={field.label}
                      type={field.type}
                      value={appointmentData[field.name] || ""}
                      onChange={handleInputChange}
                      fullWidth
                      margin="normal"
                      required
                      error={!!fieldErrors[field.name]}
                      helperText={fieldErrors[field.name]}
                    />
                  )
                )}
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <ButtonApp
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </ButtonApp>
                  <Box sx={{ flex: "1 1 auto" }} />
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
      ) : (
        <>
          <Stepper activeStep={activeStep} orientation="horizontal">
            {steps.map((step) => (
              <Step key={step.label}>
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography sx={{ mt: 2, mb: 1 }}>
                All steps completed - you're finished
              </Typography>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              {steps[activeStep].fields.map((field) =>
                field.name === "instructorName" || field.name === "role" ? (
                  <FormControl key={field.name} fullWidth margin="normal">
                    <InputLabel>{field.label}</InputLabel>
                    <Select
                      value={appointmentData[field.name] || ""}
                      onChange={handleInputChange}
                      name={field.name}
                      required
                    >
                      {steps[activeStep].menuItems.map((item) => (
                        <MenuItem key={item.value} value={item.value}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={appointmentData[field.name] || ""}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                    error={!!fieldErrors[field.name]}
                    helperText={fieldErrors[field.name]}
                  />
                )
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <ButtonApp
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </ButtonApp>
                <Button variant="contained" onClick={handleNext} sx={{ mt: 1 }}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
};

export default BookingStepper;
