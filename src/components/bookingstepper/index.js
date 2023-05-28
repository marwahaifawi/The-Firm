import React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import ButtonApp from "../../shared/button";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";

const steps = [
  {
    label: "Step 1",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
    ],
  },
  {
    label: "Step 2",
    fields: [
      { name: "date", label: "Date", type: "date" },
      { name: "time", label: "Time", type: "time" },
    ],
  },
  {
    label: "Step 3",
    fields: [
      {
        name: "additionalInfo",
        label: "Additional Information",
        type: "text",
      },
    ],
  },
];

const BookingStepper = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeStep, setActiveStep] = React.useState(0);
  const [appointmentData, setAppointmentData] = React.useState({});
  const [showSuccessAlert, setShowSuccessAlert] = React.useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setShowSuccessAlert(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
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

  if (isMobile) {
    return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
                optional={
                  index === steps.length - 1 ? (
                    <Typography variant="caption">Last step</Typography>
                  ) : null
                }
              >
                {step.label}
              </StepLabel>
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
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? "Finish" : "Continue"}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {showSuccessAlert && (
          <Alert severity="success">Appointment created successfully!</Alert>
        )}
      </Box>
    );
  } else {
    return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} orientation="horizontal">
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
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {showSuccessAlert && (
          <Alert severity="success">Appointment created successfully!</Alert>
        )}
        {activeStep === steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* Render additional content or close the modal here */}
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
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
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    );
  }
};

export default BookingStepper;
