import React from "react";
import FormNavStep from "./FormNavStep";

export default function FormNav(step) {
  const stepData = [
    { stepNum: 1, name: "Your Info" },
    { stepNum: 2, name: "Select Plan" },
    { stepNum: 3, name: "ADD-ONS" },
    { stepNum: 4, name: "Summary" },
  ];
  const formNavElements = stepData.map((stepItem, index) => {
    return (
      <FormNavStep
        key={index}
        step={step}
        stepNum={stepItem.stepNum}
        name={stepItem.name}
      />
    );
  });
  return <>{formNavElements}</>;
}
