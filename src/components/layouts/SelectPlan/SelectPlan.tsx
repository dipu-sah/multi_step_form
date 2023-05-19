import { useState } from "react";
import { AppRadio } from "../../UI/AppRadio/AppRadio";
import { AppSwitch } from "../../UI/AppSwitch/AppSwitch";
import { SelectPlanProps } from "./SelectPlanProp";

export function SelectPlan({
  control,
  onChange = () => {},
  values,
  allPlans,
}: SelectPlanProps<any>) {
  const [isMonthly, setIsMonthly] = useState<"monthly" | "yearly">("monthly");
  // const allPlans = [
  //   {
  //     planType: "monthly",
  //     label: "cszc",
  //     value: "Arcade(Monthly)",
  //     disableRipple: true,
  //     required: true,

  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-arcade.svg"
  //         planName="Arcade"
  //         price="9/mo"
  //       />
  //     ),
  //   },
  //   {
  //     planType: "monthly",
  //     label: "cszc",
  //     value: "Advanced(Monthly)",
  //     disableRipple: true,

  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-advanced.svg"
  //         planName="Advanced"
  //         price="12/mo"
  //       />
  //     ),
  //   },
  //   {
  //     planType: "monthly",
  //     label: "cszc",
  //     value: "Pro(Monthly)",
  //     disableRipple: true,

  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-pro.svg"
  //         planName="Pro"
  //         price="15/mo"
  //       />
  //     ),
  //   },
  //   {
  //     planType: "yearly",
  //     label: "cszc",
  //     value: "Arcade(Yearly)",
  //     disableRipple: true,

  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-arcade.svg"
  //         planName="Arcade"
  //         price="90/yr"
  //         freeMonths={2}
  //       />
  //     ),
  //   },
  //   {
  //     planType: "yearly",
  //     label: "cszc",
  //     value: "Advanced(Yearly)",
  //     disableRipple: true,

  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-advanced.svg"
  //         planName="Advanced"
  //         price="120/yr"
  //         freeMonths={2}
  //       />
  //     ),
  //   },
  //   {
  //     planType: "yearly",
  //     label: "cszc",
  //     value: "Pro(Yearly)",
  //     disableRipple: true,
  //     icon: (
  //       <PlanDetails
  //         imageSrc="/assets/images/icon-pro.svg"
  //         planName="Pro"
  //         price="150/yr"
  //         freeMonths={2}
  //       />
  //     ),
  //   },
  // ];
  function PlanDetails({
    planName,
    price,
    imageSrc,
    freeMonths,
  }: {
    planName: string;
    price: string;
    imageSrc: string;
    freeMonths?: number;
  }) {
    return (
      <div className="aspect-square box-border p-4">
        <figure className="flex flex-col gap-8">
          <img src={imageSrc} className="h-8 w-8 " />
          <caption className="text-left flex flex-col gap-2">
            <h2>{planName}</h2>
            <p className="text-xs text-gray-500">${price}</p>
            {freeMonths && (
              <p className="text-sm text-black">{freeMonths} months free</p>
            )}
          </caption>
        </figure>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <h2>Select Your Plan</h2>

      <AppRadio
        name="planType"
        control={control}
        onChange={(e, v) => {
          onChange({
            ...values,
            planType: v,
          });
        }}
        rules={{
          required: {
            value: true,
            message: "Please select a Plan",
          },
        }}
        sx={{ gap: "0.5rem" }}
        options={allPlans
          .filter((e) => {
            if (values.isMonthly) {
              return e.planType == "yearly";
            }
            return e.planType == "monthly";
          })
          .map((e) => {
            return {
              ...e,
              icon: (
                <PlanDetails
                  imageSrc="/assets/images/icon-pro.svg"
                  planName={e.label}
                  price={e.price}
                  freeMonths={e.freeMonths}
                />
              ),
            };
          })
          .map((e) => ({
            ...e,
            required: false,
            sx: {
              height: "11rem",
              aspectRatio: "1/1",
              ...(values["planType"] != e.value
                ? { border: "1px solid grey" }
                : { border: "1px solid blue", backgroundColor: "#483EFF10" }),
              borderRadius: "0.8rem",
              ":hover": {
                ...(values["planType"] != e.value
                  ? { border: "1px solid blue" }
                  : {}),
              },
              alignItems: "unset ",
              "& .Mui-checked": {
                border: "1px solid red",
              },
            },
            checkedIcon: e.icon,
          }))}
      >
        You have the option of monthly or yearly billing
      </AppRadio>

      <AppSwitch
        onLabel={"Monthly"}
        offLabel={"Yearly"}
        onChange={(e, v) => {
          onChange({
            ...values,
            isMonthly: v,
          });
        }}
        checked={values.isMonthly}
      />
    </div>
  );
}
