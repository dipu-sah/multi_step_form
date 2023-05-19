import { useState } from "react";
import { AppTextField } from "../../UI/AppTextField/AppTextField";
import { PersonalInfoFormProps } from "./PersonalInfoFormProps";
import { useForm } from "react-hook-form";

export function PersonalInfoForm<T extends Record<string, any>>({
  control,
  values,
  onChange = () => {},
}: PersonalInfoFormProps<T>) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Personal Info</h2>
      <p className="text-sm font-extralight text-silver-300">
        Please provide your name, email address and phone number
      </p>
      <AppTextField
        rules={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        name="name"
        control={control}
        InputProps={{
          placeholder: "Name",
        }}
        onChange={(e) => {
          onChange({
            ...values,
            name: e,
          });
        }}
      >
        Name
      </AppTextField>
      <AppTextField
        rules={{
          required: {
            value: true,
            message: "This field is required",
          },
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: "Please provide a E-mail",
          },
        }}
        name="email"
        control={control}
        InputProps={{
          placeholder: "Email Address",
        }}
        onChange={(e) => {
          onChange({
            ...values,
            email: e,
          });
        }}
      >
        Email Address
      </AppTextField>
      <AppTextField
        rules={{
          required: {
            value: true,
            message: "This field is required",
          },
        }}
        name="mobile"
        control={control}
        InputProps={{
          placeholder: "eg +1 234 567 890",
          type: "mobile",
        }}
        onChange={(e) => {
          onChange({
            ...values,
            mobile: e,
          });
        }}
      >
        Phone Number
      </AppTextField>
    </div>
  );
}
