import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { AppCheckBoxProps } from "./AppCheckBoxProps";

export function AppCheckBox(props: AppCheckBoxProps) {
  return (
    <FormControl
      fullWidth
      className="flex flex-col gap-4"
      required={props.requried}
    >
      {props.label && <FormLabel>{props.label}</FormLabel>}
      {props.options?.map((e, index) => (
        <FormControlLabel key={index} control={<Checkbox />} {...e} />
      ))}
    </FormControl>
  );
}
