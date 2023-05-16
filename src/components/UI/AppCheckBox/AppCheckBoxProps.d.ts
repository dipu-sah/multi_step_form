import { FormControlLabelProps, FormLabelProps } from "@mui/material";

export interface AppCheckBoxProps {
  options?: Omit<FormControlLabelProps, "control" | "required">[];
  requried?: boolean;
  label?: FormLabelProps["children"];
}
