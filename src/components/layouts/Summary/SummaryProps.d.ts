import { iAddOns } from "../AddOn/AddOnProps";

export interface SummaryProps {
  planDetails: {
    name: string;
    price: number;
  };
  planType: "monthly" | "yearly";
  addOns: iAddOns[];
  onPlanChangeClick: () => void;
}
