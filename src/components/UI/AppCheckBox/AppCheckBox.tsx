import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { AppCheckBoxProps } from "./AppCheckBoxProps";
import { Controller } from "react-hook-form";

export function AppCheckBox({
  onChange = () => {},
  values,
  ...props
}: AppCheckBoxProps) {
  function handleChange(value: string, status: boolean, allValues: string[]) {
    const tempValues = allValues.filter((e) => e !== value);

    if (status) {
      tempValues.push(value);
      onChange(tempValues);
      return tempValues;
    }
    onChange(tempValues);
    return tempValues;
  }
  return (
    <Controller
      name={props.name}
      control={props.control}
      rules={props.rules}
      render={({ field, fieldState }) => (
        <FormControl fullWidth className="flex flex-col gap-4" ref={field.ref}>
          <FormLabel className="flex flex-row flex-wrap">
            <span> {props.label}</span>
            <span className="text-strawberry-red">
              {fieldState.error?.message}
            </span>
          </FormLabel>
          {props.options?.map((e, index) => (
            <FormControlLabel
              key={index}
              control={<Checkbox checked={!!values.includes(e.value)} />}
              {...e}
              onChange={(_, v) => {
                field.onChange(handleChange(e.value, v, field.value));
              }}
            />
          ))}
        </FormControl>
      )}
    />
  );
}
