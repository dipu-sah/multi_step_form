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
import { AppStepperProps } from "./AppStepperProps";
export function AppStepper({
  steps,
  children = <></>,
  currentStep = 0,
  ...steppperProps
}: AppStepperProps) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper
        activeStep={currentStep}
        orientation="vertical"
        color="white"
        {...steppperProps}
      >
        {steps.map(({ description, label, labelProps, ...step }, index) => (
          <Step key={index} {...step}>
            <StepLabel {...labelProps}>
              {label}
              {description}
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
