import { useState, useEffect } from "react";
import PlanCard from "./PlanCard";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";
import planData from "../data/plan";

export default function FormPlan({
  handlePlan,
  handleNext,
  handleBack,
  plan,
  billing,
  handleBilling,
}) {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked((prev) => !prev);
  }, [billing]);
  function renderPlans() {
    return planData.map((thePlan, index) => {
      return (
        <PlanCard
          key={index}
          name={thePlan.name}
          monthly={thePlan.monthly}
          yearly={thePlan.yearly}
          icon={thePlan.icon}
          handlePlan={handlePlan}
          billing={billing}
          plan={plan}
        />
      );
    });
  }
  return (
    <div className="plan-section">
      <h2 className="form-title">Select your plan</h2>
      <h4 className="form-subtitle">
        You have the option of monthly or yearly billing.
      </h4>
      <div className="plan-card-section">{renderPlans()}</div>
      <div className="plan-billing">
        <span>Monthly</span>
        <Switch checked={checked} onClick={handleBilling} />
        <span>Yearly</span>
      </div>

      {/* <Button className="form-personal-back" onClick={handleBack}>Go Back</Button>
            <Button className="form-personal-next" onClick={handleNext}>Next Step</Button> */}
    </div>
  );
}
