import { TextFieldProps } from "@mui/material";
import { ReactNode } from "react";
import { Control, ControllerProps } from "react-hook-form";

export interface AppTextFieldProps<T extends string>
  extends Omit<TextFieldProps, "variant" | "value"> {
  children?: ReactNode[] | ReactNode;
  control: Control<any, any>;
  rules?: ControllerProps["rules"];
  name: string;
  onChange?: (e: string) => void;
}
