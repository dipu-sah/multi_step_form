import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AppRadioProps } from "./AppRadioProps";

export function AppRadio({
  children,
  options,
  ...radioGroupProps
}: AppRadioProps) {
  return (
    <FormControl fullWidth>
      <FormLabel>{children}</FormLabel>
      <RadioGroup row className="gap-10" {...radioGroupProps}>
        {options.map(({ ...e }, index) => (
          <Radio {...e} key={index} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
