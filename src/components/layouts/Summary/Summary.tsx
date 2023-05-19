import { SummaryProps } from "./SummaryProps";

export function Summary(props: SummaryProps) {
  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div className="flex flex-col bg-gray-100 rounded-lg box-border p-8 w-full">
        <p className="flex flex-row text-pastel-blue">
          <span className="grow">{props.planDetails.name}</span>
          <span>
            {props.planDetails.price}/ $
            {props.planType == "monthly" ? "mo" : "yr"}
          </span>
        </p>
        <button
          className="w-fit underline"
          onClick={() => {
            props.onPlanChangeClick();
          }}
        >
          change
        </button>
        <div className="border-grey-500 border-solid border-t-[2px] my-4 box-border py-4 w-full  text-gray-600">
          {props.addOns.map((e, index) => {
            return (
              <div key={index} className="flex flex-row ">
                <span className="grow">{e.title}</span>
                <span>
                  +${e.price}/{props.planType == "monthly" ? "mo" : "yr"}
                </span>
              </div>
            );
          })}
        </div>
        <p className="flex flex-row">
          <span className="grow">
            Total (per {props.planType == "monthly" ? "month" : "year"})
          </span>
          <span className="text-pastel-blue font-bold text-2xl">
            $
            {props.addOns.reduce((prev, e) => {
              return prev + e.price;
            }, props.planDetails.price || 0)}
            /{props.planType == "monthly" ? "month" : "year"}
          </span>
        </p>
      </div>
    </div>
  );
}
