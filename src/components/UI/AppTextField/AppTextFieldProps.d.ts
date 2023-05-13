import { TextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export interface AppTextFieldProps extends Omit<TextFieldProps, "variant"> {
  children?: ReactNode[] | ReactNode;
}
