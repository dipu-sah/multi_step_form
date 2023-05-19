import { Control } from "react-hook-form";
export interface PersonalInfoFormProps<T extends Record<string, any>> {
  control: Control<T>;
  values: T;
  onChange: (e: T) => void;
}
