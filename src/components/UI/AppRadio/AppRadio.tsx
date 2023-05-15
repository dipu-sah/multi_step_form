import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AppRadioProps } from "./AppRadioProps";

export function AppRadio({ children, options }: AppRadioProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{children}</FormLabel>
      <RadioGroup row className="gap-10">
        {options.map(({ ...e }, index) => (
          <Radio {...e} key={index} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
