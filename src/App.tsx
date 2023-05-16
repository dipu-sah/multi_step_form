import { Fragment, useEffect, useState } from "react";
import { AppCard } from "./components/UI/AppCard/AppCard";
import { AppStepper } from "./components/UI/AppStepper/AppStepper";
import { PersonalInfoForm } from "./components/layouts/PersonalInfoForm/PersonalInfoForm";
import { SelectPlan } from "./components/layouts/SelectPlan/SelectPlan";
import { AddOn } from "./components/layouts/AddOn/AddOn";
import { Summary } from "./components/layouts/Summary/Summary";
import { AppTextField } from "./components/UI/AppTextField/AppTextField";
import { AppButton } from "./components/UI/AppButton/AppButton";
import { AppStepperProps } from "./components/UI/AppStepper/AppStepperProps";
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    planType: {
      name: "",
      price: "",
      type: "",
    },
    addOne: [],
  });
  const allSteps: AppStepperProps["steps"] = [
    {
      content: <PersonalInfoForm />,
      label: <p className="text-gray-500">Step 1</p>,
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
      content: <SelectPlan></SelectPlan>,
      label: <p className="text-gray-500">Step 2</p>,
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
      content: <AddOn></AddOn>,
      label: <p className="text-gray-500">Step 3</p>,
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
      content: <Summary></Summary>,
      label: <p className="text-gray-500">Step 4</p>,
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
  return (
    <div className="h-screen flex  flex-col items-center justify-center">
      <AppCard
        className="box-border p-4 flex flex-row gap-2 w-2/5 rounded-3xl  h-[568px]"
        sx={{ borderRadius: "1.5rem" }}
      >
        <aside
          className={`bg-cover bg-[url('http://localhost:3000/assets/images/bg-sidebar-desktop.svg')] box-border p-4 text-white h-full w-[274px]`}
        >
          <AppStepper
            currentStep={currentStep}
            steps={allSteps}
            connector={<></>}
          ></AppStepper>
        </aside>
        <main className="flex flex-col grow box-border px-8 py-4">
          <form
            className="flex flex-col gap-2 w-full h-full "
            onSubmit={(e) => {
              e.preventDefault();
              setCurrentStep(Math.min(allSteps.length - 1, currentStep + 1));
            }}
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
                <AppButton color="info" variant="contained" type="submit">
                  Next Step
                </AppButton>
              )}
              {currentStep == allSteps.length - 1 && (
                <AppButton variant="contained" type="submit" color="primary">
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
