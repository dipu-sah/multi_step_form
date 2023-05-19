import { Control } from "react-hook-form";
export interface iPlan {
  planType: "monthly" | "yearly";
  label: string;
  value: string;
  freeMonths?: number;
  price: string;
  imgSrc: string;
}
export interface SelectPlanProps<T extends Record<string, any>> {
  onChange: (e: T) => void;
  values: T;
  control: Control<T>;
  allPlans: iPlan[];
}
