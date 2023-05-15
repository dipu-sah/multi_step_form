import { FormControlLabelProps } from "@mui/material";

export interface AppCheckBoxProps {
  options?: Omit<FormControlLabelProps, "control">[];
}
