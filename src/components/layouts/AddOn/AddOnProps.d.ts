import { ControllerProps } from "react-hook-form";
export interface iAddOns {
  title: string;
  description: string;
  price: number;
  planType: "monthly" | "yearly";
  value: string;
}
export interface AddOnProps<T> {
  control: ControllerProps<T>["control"];
  values: T;
  onChange: (e: T) => void;
  allAvailableAddons: any[];
}
