import { FormControl, FormLabel, Switch } from "@mui/material";
import { AppSwitchProps } from "./AppSwitchProps";
import { useState } from "react";

export function AppSwitch({ onLabel, offLabel, ...props }: AppSwitchProps) {
  return (
    <FormControl
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
      fullWidth
    >
      {(onLabel || !offLabel) && <FormLabel>{onLabel}</FormLabel>}
      <Switch {...props} />
      {offLabel && <FormLabel>{offLabel}</FormLabel>}
    </FormControl>
  );
}
