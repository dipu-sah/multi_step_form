import { useState } from "react";
import { AppRadio } from "../../UI/AppRadio/AppRadio";
import { AppSwitch } from "../../UI/AppSwitch/AppSwitch";

export function SelectPlan() {
  const [isMonthly, setIsMonthly] = useState<"monthly" | "yearly">("monthly");
  const [currentPlan, setCurrentPlan] = useState<string>("");
  const allPlans = [
    {
      planType: "monthly",
      label: "cszc",
      value: "Monthly Arcade",
      disableRipple: true,
      required: true,

      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-arcade.svg"
          planName="Arcade"
          price="9/mo"
        />
      ),
    },
    {
      planType: "monthly",
      label: "cszc",
      value: "Monthly Advanced",
      disableRipple: true,

      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-advanced.svg"
          planName="Advanced"
          price="12/mo"
        />
      ),
    },
    {
      planType: "monthly",
      label: "cszc",
      value: "Monthly Pro",
      disableRipple: true,

      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-pro.svg"
          planName="Pro"
          price="15/mo"
        />
      ),
    },
    {
      planType: "yearly",
      label: "cszc",
      value: "Yearly Arcade",
      disableRipple: true,

      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-arcade.svg"
          planName="Arcade"
          price="90/yr"
          freeMonths={2}
        />
      ),
    },
    {
      planType: "yearly",
      label: "cszc",
      value: "Yearly Advanced",
      disableRipple: true,

      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-advanced.svg"
          planName="Advanced"
          price="120/yr"
          freeMonths={2}
        />
      ),
    },
    {
      planType: "yearly",
      label: "cszc",
      value: "Yearly Pro",
      disableRipple: true,
      icon: (
        <PlanDetails
          imageSrc="/assets/images/icon-pro.svg"
          planName="Pro"
          price="150/yr"
          freeMonths={2}
        />
      ),
    },
  ];
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
      <div className="h-32 aspect-square box-border p-4">
        <figure className="flex flex-col gap-8">
          <img src={imageSrc} className="h-10 w-10 " />
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

      {isMonthly && (
        <AppRadio
          value={currentPlan}
          onChange={(e, v) => {
            setCurrentPlan(v);
          }}
          options={allPlans
            .filter(
              (e) =>
                isMonthly && e.planType.toLowerCase() == isMonthly.toLowerCase()
            )
            .map((e) => ({
              ...e,
              sx: {
                height: "11rem",
                ...(currentPlan != e.value
                  ? { border: "1px solid grey" }
                  : { border: "1px solid blue", backgroundColor: "#483EFF10" }),
                borderRadius: "0.8rem",
                ":hover": {
                  ...(currentPlan != e.value
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
          <p className="h-16">
            You have the option of monthly or yearly billing
          </p>
        </AppRadio>
      )}
      {/* {!isMonthly && (
        <AppRadio
          options={[].map((e) => ({
            ...e,
            sx: {
              height: "10rem",
              ":hover": {
                border: "2px solid blue",
                borderRadius: "1rem",
              },
              alignItems: "unset ",
              "&.Mui-checked": {
                border: "2px solid red",
              },
            },

            checkedIcon: e.icon,
          }))}
        >
          <p className="h-16">
            You have the option of monthly or yearly billing
          </p>
        </AppRadio>
      )} */}
      <AppSwitch
        onLabel={"Monthly"}
        offLabel={"Yearly"}
        onChange={(e, v) => {
          if (!v) {
            setIsMonthly("monthly");
          } else {
            setIsMonthly("yearly");
          }
        }}
        value={isMonthly}
      />
    </div>
  );
}
