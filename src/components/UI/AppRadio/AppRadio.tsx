import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { AppRadioProps } from "./AppRadioProps";
import { Controller } from "react-hook-form";

export function AppRadio({
  children,
  options,
  name,
  control,
  rules,
  onChange = () => {},
  ...radioGroupProps
}: AppRadioProps) {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormControl fullWidth className="flex flex-col gap-8">
          <FormLabel className="flex flex-row flex-wrap">
            <span className="grow"> {children}</span>
            {fieldState.error && (
              <span className="text-red-800">{fieldState.error.message}</span>
            )}
          </FormLabel>
          <RadioGroup
            row
            className="gap-10"
            {...radioGroupProps}
            ref={field.ref}
            value={field.value}
            onChange={(e, v) => {
              field.onChange(e);
              onChange(e, v);
            }}
          >
            {options.map(({ ...e }, index) => (
              <Radio {...e} key={index} />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    />
  );
}
