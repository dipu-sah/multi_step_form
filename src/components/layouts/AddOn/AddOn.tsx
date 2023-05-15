import { AppCheckBox } from "../../UI/AppCheckBox/AppCheckBox";

export function AddOn() {
  return (
    <div>
      <h2>Pick add-ons</h2>
      <div className="flex flex-col box-border p-4">
        <AppCheckBox
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
            return {
              ...e,
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
                height: "4.5rem",
                ":checked": {
                  "& .MuiFormControl-root": {
                    border: "2px solid red",
                  },
                },
                border: "2px solid grey",
                borderRadius: "0.4rem",
                background: "#f5f5f5",
                "& .MuiFormControlLabel-label": {
                  width: "100%",
                },
                boxSizing: "border-box",
                padding: "0.5rem",
              },
            };
          })}
        />
      </div>
    </div>
  );
}
