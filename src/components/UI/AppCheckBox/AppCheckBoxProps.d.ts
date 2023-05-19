import { FormControlLabelProps, FormLabelProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";
import { SingleOption } from "../../../@types/options";

export interface AppCheckBoxProps {
  options?: (Omit<FormControlLabelProps, "control" | "required"> &
    SingleOption)[];
  requried?: boolean;
  label?: FormLabelProps["children"];
  control: ControllerProps["control"];
  rules?: ControllerProps["rules"];
  name: string;
  values: string[];
  onChange?: (e: (string | number)[]) => void;
}
