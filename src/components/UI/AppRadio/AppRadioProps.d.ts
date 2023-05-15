import { RadioProps } from "@mui/material";
import { SingleOption } from "../../../@types/options";
import { ReactNode } from "react";

export interface AppRadioProps {
  options: (SingleOption & RadioProps)[];
  children?: ReactNode | string;
  value?: string;
}
