import { RadioGroupProps, RadioProps } from "@mui/material";
import { SingleOption } from "../../../@types/options";
import { ReactNode } from "react";

export interface AppRadioProps extends RadioGroupProps {
  options: (SingleOption & RadioProps)[];
  children?: ReactNode | string;
  value?: string;
}
