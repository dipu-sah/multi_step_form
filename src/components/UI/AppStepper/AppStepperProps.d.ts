import { StepLabelProps, StepProps, StepperProps } from "@mui/material";

export interface AppStepperProps extends StepperProps {
  children?: ReactNode[] | ReactNode;
  currentStep?: number;
  steps: {
    content: ReactNode;
    label: ReactNode;
    description?: ReactNode;
    labelProps?: StepLabelProps;
  }[];
}
