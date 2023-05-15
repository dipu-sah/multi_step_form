import { SwitchProps } from "@mui/material";
import { ReactNode } from "react";

export interface AppSwitchProps extends SwitchProps {
  onLabel?: ReactNode;
  offLabel?: ReactNode;
}
