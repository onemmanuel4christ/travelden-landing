import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = [
  {
    label: "Sign up to become an affiliate",
  },
  {
    label: "Wait for email confirmation",
  },
  {
    label: "Start selling immediately",
  },
];

export default function VerticalStepper() {

  return (
    <Box sx={{ maxWidth: "100%" }}>
      <Stepper orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label} sx={{}}>
            <StepLabel>
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
