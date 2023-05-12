import React, { ReactNode } from "react";
import {
  Stepper,
  Box,
  Step,
  StepLabel,
  Typography,
  Button,
  StepContent,
  Paper,
} from "@mui/material";
export function AppStepper({
  steps,
  children = <></>,
  currentStep = 0,
}: {
  children?: ReactNode[] | ReactNode;
  currentStep?: number;
  steps: {
    content: ReactNode;
    label: ReactNode;
    description?: ReactNode;
  }[];
}) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={currentStep} orientation="vertical" color="white">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>
              {step.label}
              {step.description}
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                <div>{children}</div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
