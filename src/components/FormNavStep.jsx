import React from "react";

export default function FormNavStep({ stepNum, name, step, handleStepNav }) {
  const activeStyles = {
    backgroundColor: "hsl(206, 94%, 87%)",
    color: "hsl(213, 96%, 18%)",
    border: "0px",
  };
  const inactiveStyles = { backgroundColor: "transparent", color: "white" };
  function handleClick() {
    handleStepNav(stepNum);
  }
  return (
    <div className="step-section">
      <div className="circle">
        <p
          className="form-circle"
          style={stepNum === step.step ? activeStyles : inactiveStyles}
          onClick={handleClick}
        >
          {stepNum}
        </p>
      </div>
      <div className="step-text-section">
        <h3 className="step-text">STEP {stepNum}</h3>
        <h3 className="step-subtext">{name.toUpperCase()}</h3>
      </div>
    </div>
  );
}
