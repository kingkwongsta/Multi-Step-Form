import React from "react";

export default function PlanCard({
  name,
  monthly,
  yearly,
  billing,
  icon,
  handlePlan,
  plan,
}) {
  function handleSelection(selection) {
    handlePlan(selection);
  }
  const selected = {
    border: "1px solid hsl(243, 100%, 62%)",
    backgroundColor: "hsl(217, 100%, 97%)",
  };
  const unselected = {
    border: "1px solid hsl(229, 24%, 87%)",
    backgroundColor: "transparent",
  };
  return (
    <div
      className="plan-card"
      onClick={() => handleSelection(name)}
      style={plan === name ? selected : unselected}
    >
      <img src={icon} alt="" className="plan-card-icon" />
      <p className="plan-card-title">{name}</p>
      <p className="plan-card-price">
        {billing ? <>${monthly}/mo</> : <span>${yearly}/yr</span>}
      </p>
      <p className="yearly-offer">{!billing && "two months free"}</p>
    </div>
  );
}
