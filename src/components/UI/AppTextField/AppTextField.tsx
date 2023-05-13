import { FormControl, FormLabel, TextField } from "@mui/material";
import { AppTextFieldProps } from "./AppTextFieldProps";

export function AppTextField({
  children = <></>,
  ...props
}: AppTextFieldProps) {
  return (
    <FormControl className="flex flex-col gap-2">
      <FormLabel>{children}</FormLabel>
      <TextField fullWidth size="small" {...props} required={true} />
    </FormControl>
  );
}
