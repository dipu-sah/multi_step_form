import { FormControl, FormLabel, TextField } from "@mui/material";
import { AppTextFieldProps } from "./AppTextFieldProps";
import { Controller, useController, useForm } from "react-hook-form";
import { ChangeEvent, useEffect } from "react";

export const AppTextField = function <T extends string>({
  children = <></>,
  control,
  rules,
  name,
  onChange = () => {},
  ...props
}: AppTextFieldProps<T>) {
  return (
    <Controller
      name={name}
      rules={rules}
      control={control}
      render={({ field, fieldState, formState }) => (
        <FormControl className="flex flex-col gap-2">
          <FormLabel className={"flex flex-row flex-wrap "}>
            <span className="grow">{children}</span>
            {!!fieldState.error && (
              <span className="text-red-800">{fieldState.error?.message}</span>
            )}
          </FormLabel>
          <TextField
            fullWidth
            size="small"
            {...props}
            value={field.value || ""}
            inputRef={field.ref}
            error={!!fieldState.error}
            onChange={(
              e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
            ) => {
              field.onChange(e?.target?.value || "");
              onChange(e?.target?.value || "");
            }}
          />
        </FormControl>
      )}
    />
  );
};
