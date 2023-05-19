import { Fragment, useEffect, useState } from "react";
import { AppCard } from "./components/UI/AppCard/AppCard";
import { AppStepper } from "./components/UI/AppStepper/AppStepper";
import { PersonalInfoForm } from "./components/layouts/PersonalInfoForm/PersonalInfoForm";
import { SelectPlan } from "./components/layouts/SelectPlan/SelectPlan";
import { AddOn } from "./components/layouts/AddOn/AddOn";
import { Summary } from "./components/layouts/Summary/Summary";
import { AppButton } from "./components/UI/AppButton/AppButton";
import { AppStepperProps } from "./components/UI/AppStepper/AppStepperProps";
import { Control, useForm } from "react-hook-form";
import { PlanDetails } from "./@types/Plan";
import { AddOnDetails } from "./@types/AddOns";
import { PersonalInfo } from "./@types/PersonalInfo";
import { iPlan } from "./components/layouts/SelectPlan/SelectPlanProp";
import { iAddOns } from "./components/layouts/AddOn/AddOnProps";
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const formState = useForm<PersonalInfo & PlanDetails & AddOnDetails>({
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      planType: "",
      isMonthly: true,
      selectedAddOns: [],
    },
    mode: "all",
  });
  const allPlans: iPlan[] = [
    {
      planType: "monthly",
      label: "Arcade",
      value: "Arcade(Monthly)",
      price: 9,
      imgSrc: "/assets/images/icon-arcade.svg",
    },
    {
      planType: "monthly",
      label: "Advanced",
      price: 12,
      value: "Advanced(Monthly)",
      imgSrc: "/assets/images/icon-advanced.svg",
    },
    {
      planType: "monthly",
      label: "Pro",
      price: 15,
      value: "Pro(Monthly)",
      imgSrc: "/assets/images/icon-pro.svg",
    },
    {
      planType: "yearly",
      label: "Arcade",
      price: 90,
      value: "Arcade(Yearly)",
      freeMonths: 2,
      imgSrc: "/assets/images/icon-arcade.svg",
    },
    {
      planType: "yearly",
      label: "Advanced",
      price: 120,
      value: "Advanced(Yearly)",
      freeMonths: 2,
      imgSrc: "/assets/images/icon-advanced.svg",
    },
    {
      planType: "yearly",
      label: "Pro",
      price: 150,
      value: "Pro(Yearly)",
      freeMonths: 2,
      imgSrc: "/assets/images/icon-pro.svg",
    },
  ];
  const allAvailableAddons: iAddOns[] = [
    {
      title: "Online Service",
      description: "Online Service",
      price: 1,
      planType: "monthly",
      value: "Online Service (monthly)",
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
      planType: "monthly",
      value: "Larger storage (monthly)",
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
      planType: "monthly",
      value: "Customizable profile (monthly)",
    },
    {
      title: "Online Service",
      description: "Online Service",
      price: 10,
      planType: "yearly",
      value: "Online Service (yearly)",
    },
    {
      title: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 20,
      planType: "yearly",
      value: "Larger storage (yearly)",
    },
    {
      title: "Customizable profile",
      description: "Custom theme on your profile",
      price: 20,
      planType: "yearly",
      value: "Customizable profile (yearly)",
    },
  ];
  const allSteps: AppStepperProps["steps"] = [
    {
      content: (
        <>
          <PersonalInfoForm
            values={formState.getValues()}
            control={formState.control}
            onChange={(e) => {
              formState.reset({
                ...formState.getValues(),
                ...e,
              });
            }}
          />
        </>
      ),
      label: <p className="text-white font-thin">Step 1</p>,
      description: <p className=" font-bold text-white">Your Info</p>,
      labelProps: {
        StepIconComponent: (e) => {
          return (
            <div
              className={`h-8 aspect-square border-white border-2 border-solid flex items-center justify-center rounded-full ${
                e.active ? "bg-blue-300 text-black border-0" : ""
              }
            `}
            >
              1
            </div>
          );
        },
      },
    },
    {
      content: (
        <SelectPlan
          allPlans={allPlans.filter((e) => {
            if (formState.getValues("isMonthly")) {
              return e.planType == "yearly";
            }
            return e.planType == "monthly";
          })}
          values={formState.getValues()}
          control={formState.control}
          onChange={(e) => {
            formState.reset({
              ...formState.getValues(),
              ...e,
              planType: e.planType,
              isMonthly: e.isMonthly,
              ...(formState.getValues("isMonthly") != e.isMonthly
                ? { selectedAddOns: [] }
                : {}),
            });
          }}
        />
      ),
      label: <p className="text-white font-thin">Step 2</p>,
      description: <p className=" font-bold text-white">Select Plan</p>,
      labelProps: {
        StepIconComponent: (e) => {
          return (
            <div
              className={`h-8 aspect-square border-white border-2 border-solid flex items-center justify-center rounded-full ${
                e.active ? "bg-blue-300 text-black border-0" : ""
              }
            `}
            >
              2
            </div>
          );
        },
      },
    },
    {
      content: (
        <AddOn
          control={formState.control}
          values={formState.getValues()}
          allAvailableAddons={allAvailableAddons.filter((e) => {
            if (!formState.getValues("isMonthly")) {
              return e.planType == "monthly";
            }
            return e.planType == "yearly";
          })}
          onChange={(e) => {
            formState.reset({
              ...formState.getValues(),
              selectedAddOns: e,
            });
          }}
        ></AddOn>
      ),
      label: <p className="text-white font-thin">Step 3</p>,
      description: <p className=" font-bold text-white">Add-ons </p>,
      labelProps: {
        StepIconComponent: (e) => {
          return (
            <div
              className={`h-8 aspect-square border-white border-2 border-solid flex items-center justify-center rounded-full ${
                e.active ? "bg-blue-300 text-black border-0" : ""
              }
          `}
            >
              3
            </div>
          );
        },
      },
    },
    {
      content: (
        <Summary
          onPlanChangeClick={() => {
            setCurrentStep(1);
          }}
          addOns={allAvailableAddons.filter((e) =>
            formState.getValues("selectedAddOns").includes(e.value)
          )}
          planType={formState.getValues("isMonthly") ? "yearly" : "monthly"}
          planDetails={{
            name:
              allPlans.find((e) => e.value == formState.getValues("planType"))
                ?.value || "",
            price:
              allPlans.find((e) => e.value == formState.getValues("planType"))
                ?.price || 0,
          }}
        />
      ),
      label: <p className="text-white font-thin">Step 4</p>,
      description: <p className=" font-bold text-white">Summary</p>,
      labelProps: {
        StepIconComponent: (e) => {
          return (
            <div
              className={`h-8 aspect-square border-white border-2 border-solid flex items-center justify-center rounded-full ${
                e.active ? "bg-blue-300 text-black border-0" : ""
              }
          `}
            >
              4
            </div>
          );
        },
      },
    },
  ];
  const backgroundImageSrc = "/assets/images/bg-sidebar-desktop.svg";
  return (
    <div className="h-screen flex  flex-col items-center justify-center">
      <AppCard
        className="box-border p-4 flex flex-row gap-2 w-2/5 h-[32rem]"
        sx={{ borderRadius: "1.5rem", minWidth: "50rem" }}
      >
        <aside
          style={{
            backgroundImage: `url('${backgroundImageSrc}')`,
          }}
          className={
            "bg-cover box-border text-white h-full h-[30rem] w-[15rem] rounded-3xl"
          }
        >
          <AppStepper
            currentStep={currentStep}
            steps={allSteps}
            className="px-4"
            connector={<div className="h-4 aspect-square"></div>}
            sx={{
              ".MuiStepContent-root": {
                display: "none",
              },
            }}
          />
        </aside>
        <main className="flex flex-col grow box-border px-8 py-4">
          <form
            className="flex flex-col gap-2 w-full h-full "
            onSubmit={formState.handleSubmit((e: any) => {
              setCurrentStep(Math.min(allSteps.length - 1, currentStep + 1));
            })}
          >
            <section className="h-full overflow-scroll grow h-[568px]">
              {allSteps[currentStep].content}
            </section>
            <div className="flex flex-row">
              {currentStep > 0 && (
                <AppButton
                  type="button"
                  onClick={() => {
                    setCurrentStep(Math.max(0, currentStep - 1));
                  }}
                >
                  <span className="text-gray-300 font-light">Go back</span>
                </AppButton>
              )}
              <div className="spacer grow"> </div>
              {currentStep < allSteps.length - 1 && (
                <AppButton
                  color="info"
                  variant="contained"
                  type="submit"
                  sx={{
                    background: "#473dff",
                  }}
                >
                  Next Step
                </AppButton>
              )}
              {currentStep == allSteps.length - 1 && (
                <AppButton
                  variant="contained"
                  type="submit"
                  color="primary"
                  sx={{
                    background: "#473dff",
                  }}
                >
                  Confirm
                </AppButton>
              )}
            </div>
          </form>
        </main>
      </AppCard>
    </div>
  );
}

export default App;
