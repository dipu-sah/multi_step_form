import { Checkbox, FormControl, FormControlLabel } from "@mui/material";
import { AppCheckBoxProps } from "./AppCheckBoxProps";

export function AppCheckBox(props: AppCheckBoxProps) {
  return (
    <FormControl fullWidth className="flex flex-col gap-4">
      {props.options?.map((e, index) => (
        <FormControlLabel key={index} control={<Checkbox />} {...e} />
      ))}
    </FormControl>
  );
}
