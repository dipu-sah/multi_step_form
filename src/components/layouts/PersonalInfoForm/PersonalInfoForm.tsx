import { AppTextField } from "../../UI/AppTextField/AppTextField";

export function PersonalInfoForm() {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold">Personal Info</h2>
      <p className="text-sm font-extralight text-silver-300">
        Please provide your name, email address and phone number
      </p>
      <AppTextField
        required={true}
        InputProps={{
          placeholder: "Name",
          required: true,
        }}
      >
        Name
      </AppTextField>
      <AppTextField
        required={true}
        InputProps={{
          placeholder: "Email Address",
          required: true,
          type: "email",
        }}
      >
        Email Address
      </AppTextField>
      <AppTextField
        required={true}
        InputProps={{
          placeholder: "eg +1 234 567 890",
          required: true,
          type: "mobile",
        }}
      >
        Phone Number
      </AppTextField>
    </div>
  );
}
