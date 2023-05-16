import { useState } from "react";
import { AppCheckBox } from "../../UI/AppCheckBox/AppCheckBox";

export function AddOn() {
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>(
    {}
  );
  return (
    <div>
      <h2>Pick add-ons</h2>
      <div className="flex flex-col box-border p-4">
        <AppCheckBox
          requried={true}
          options={[
            {
              title: "Online Service",
              description: "Online Service",
              price: 10,
            },
            {
              title: "Larger storage",
              description: "Extra 1TB of cloud save",
              price: 20,
            },
            {
              title: "Customizable profile",
              description: "Custom theme on your profile",
              price: 20,
            },
          ].map((e) => {
            const value = e.title;
            return {
              ...e,
              checked: !!selectedAddons[e.title],
              onChange: (_, v) => {
                setSelectedAddons(({ ...o }) => {
                  if (v) {
                    o[value] = true;
                  } else {
                    delete o[value];
                  }
                  return o;
                });
              },
              value,
              label: (
                <div className="flex flex-row w-full justify-center items-center">
                  <h2 className="flex flex-col grow">
                    <span className="font-bold text-sm">{e.title}</span>
                    <span className="text-grey-500 text-xs">
                      {e.description}
                    </span>
                  </h2>
                  <span className="text-purple-500 text-xs">+{e.price}/yr</span>
                </div>
              ),
              sx: {
                ".MuiFormControlLabel-asterisk": {
                  display: "none",
                },
                height: "4.5rem",

                ...(value in selectedAddons
                  ? {
                      border: "1px solid #483EFF",
                      background: "#483EFF10",
                    }
                  : {
                      border: "1px solid grey",
                      background: "#f5f5f5",
                    }),
                borderRadius: "0.4rem",
                "& .MuiFormControlLabel-label": {
                  width: "100%",
                },
                boxSizing: "border-box",
                padding: "0.5rem 1rem",
              },
            };
          })}
        />
      </div>
    </div>
  );
}
