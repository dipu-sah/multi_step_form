import { RadioGroupProps, RadioProps } from "@mui/material";
import { SingleOption } from "../../../@types/options";
import { ReactNode } from "react";
import { ControllerProps } from "react-hook-form";

export interface AppRadioProps extends RadioGroupProps {
  options: (SingleOption & RadioProps)[];
  children?: ReactNode | string;
  value?: string;
  control: ControllerProps["control"];
  rules?: ControllerProps["rules"];
  name: string;
}
