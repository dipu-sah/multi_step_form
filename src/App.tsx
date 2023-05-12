import { Fragment, useState } from "react";
import { AppCard } from "./components/UI/AppCard/AppCard";
import { AppStepper } from "./components/UI/AppStepper/AppStepper";
import { PersonalInfoForm } from "./components/layouts/PersonalInfoForm/PersonalInfoForm";
import { SelectPlan } from "./components/layouts/SelectPlan/SelectPlan";
import { AddOn } from "./components/layouts/AddOn/AddOn";
import { Summary } from "./components/layouts/Summary/Summary";
function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const allSteps = [
    {
      content: <PersonalInfoForm />,
      label: <p className="text-gray-500">Step 1</p>,
      description: <p className=" font-bold text-white">Your Info</p>,
    },
    {
      content: <SelectPlan></SelectPlan>,
      label: <p className="text-gray-500">Step 2</p>,
      description: <p className=" font-bold text-white">Select Plan</p>,
    },
    {
      content: <AddOn></AddOn>,
      label: <p className="text-gray-500">Step 3</p>,
      description: <p className=" font-bold text-white">Add-ons </p>,
    },
    {
      content: <Summary></Summary>,
      label: <p className="text-gray-500">Step 4</p>,
      description: <p className=" font-bold text-white">Summary</p>,
    },
  ];
  return (
    <div className="h-screen flex  flex-col items-center justify-center">
      <AppCard className="box-border p-4 flex flex-row gap-2 h-[900px] w-1/2">
        <aside
          className={`bg-cover bg-[url('http://localhost:3000/assets/images/bg-sidebar-desktop.svg')] w-1/3 box-border p-4 text-white`}
        >
          <AppStepper currentStep={currentStep} steps={allSteps}></AppStepper>
        </aside>
        <main className="flex flex-col grow">
          <section className="h-full overflow-auto">
            {allSteps[currentStep].content}
          </section>
          <div className="flex flex-row gap-2 w-full">
            {currentStep > 0 && (
              <button
                onClick={() => {
                  setCurrentStep(Math.max(0, currentStep - 1));
                }}
              >
                Go back
              </button>
            )}
            <div className="spacer grow"> </div>
            {currentStep < allSteps.length - 1 && (
              <button
                onClick={() => {
                  setCurrentStep(
                    Math.min(allSteps.length - 1, currentStep + 1)
                  );
                }}
              >
                Next Step
              </button>
            )}
          </div>
        </main>
      </AppCard>
    </div>
  );
}

export default App;
