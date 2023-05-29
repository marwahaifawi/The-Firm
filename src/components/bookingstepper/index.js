import React from "react";
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

const steps = [
  {
    label: "Additional Personal Info",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
    ],
  },
  {
    label: "Appointment Details",
    fields: [
      { name: "date", label: "Date", type: "date" },
      { name: "time", label: "Time", type: "time" },
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
  const [activeStep, setActiveStep] = React.useState(0);
  const [appointmentData, setAppointmentData] = React.useState({});
  console.log(appointmentData);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  const handleReset = () => {
    setActiveStep(0);
    setAppointmentData({});
  };

  return (
    <Box sx={{ width: "100%" }}>
      {isMobile ? (
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                {step.fields.map((field) => (
                  <TextField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    type={field.type}
                    value={appointmentData[field.name] || ""}
                    onChange={handleInputChange}
                    required
                    fullWidth
                    margin="normal"
                  />
                ))}
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
            {steps.map((step, index) => (
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
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button onClick={handleReset}>Reset</Button>
              </Box>
            </>
          ) : (
            <Box sx={{ width: "100%" }}>
              {steps[activeStep].fields.map((field) => (
                <TextField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  type={field.type}
                  value={appointmentData[field.name] || ""}
                  onChange={handleInputChange}
                  required
                  fullWidth
                  margin="normal"
                />
              ))}
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
                  onClick={
                    activeStep === steps.length - 1 ? onClose : handleNext
                  }
                  sx={{ mt: 1, mr: 1 }}
                >
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
