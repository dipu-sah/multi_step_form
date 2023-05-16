export function Summary() {
  const planDetails = {
    name: "Arcade",
    price: 9,
    isMonthly: true,
  };
  const addOns = [{ name: "Online service", pricePerMonth: 1 }];

  return (
    <div>
      <h2>Finishing up</h2>
      <p>Double-check everything looks OK before confirming</p>
      <div>
        <p>
          {" "}
          {`${planDetails.name} (${
            planDetails.isMonthly ? "Monthly" : "Yearly"
          })`}
        </p>
        <span>
          ${`${planDetails.price}/${planDetails.isMonthly ? "mo" : "yr"}`}
        </span>
      </div>
    </div>
  );
}
