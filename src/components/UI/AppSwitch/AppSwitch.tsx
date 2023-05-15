import { FormControl, FormLabel, Switch } from "@mui/material";
import { AppSwitchProps } from "./AppSwitchProps";
import { useState } from "react";

export function AppSwitch({ onLabel, offLabel, ...props }: AppSwitchProps) {
  const [isChecked, setIsChecked] = useState(!!props.checked);
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
      <Switch
        {...props}
        checked={isChecked}
        onChange={(e, v) => {
          setIsChecked(v);
          if (props.onChange) {
            props.onChange(e, v);
          }
        }}
      />
      {offLabel && <FormLabel>{offLabel}</FormLabel>}
    </FormControl>
  );
}
