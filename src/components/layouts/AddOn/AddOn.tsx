import { useState } from "react";
import { AppCheckBox } from "../../UI/AppCheckBox/AppCheckBox";
import { AddOnProps } from "./AddOnProps";

export function AddOn({ allAvailableAddons, ...props }: AddOnProps<any>) {
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>(
    {}
  );
  return (
    <div>
      <h2>Pick add-ons</h2>
      <div className="flex flex-col box-border p-4">
        <AppCheckBox
          values={props.values["selectedAddOns"]}
          onChange={(e) => {
            props.onChange(e);
          }}
          name={"selectedAddOns"}
          control={props.control}
          // rules={{
          //   required: {
          //     message: "Please select a plan",
          //     value: true,
          //   },
          // }}
          options={allAvailableAddons.map((e) => {
            const value = e.value;
            return {
              ...e,
              checked: !!selectedAddons[e.title],
              label: (
                <div className="flex flex-row w-full justify-center items-center flex-wrap  ">
                  <h2 className="flex flex-col grow">
                    <span className="font-bold text-sm break-all ">
                      {e.title}
                    </span>
                    <span className="text-grey-500 text-xs break-all">
                      {e.description}
                    </span>
                  </h2>
                  <span className="text-purple-500 text-xs text-right grow">
                    +{e.price}/{!props.values.isMonthly ? "mo" : "yr"}
                  </span>
                </div>
              ),
              sx: {
                ".MuiFormControlLabel-asterisk": {
                  display: "none",
                },
                minHeight: "4.5rem",

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
