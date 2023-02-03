import React from "react";

export default function FormNavStep({ stepNum, name }) {
  return (
    <div className="step-section">
      <div className="circle">
        <p className="form-circle">{stepNum}</p>
      </div>
      <div className="step-text-section">
        <h3 className="step-text">STEP {stepNum.toUpperCase()}</h3>
        <h3 className="step-subtext">{name.toUpperCase()}</h3>
      </div>
    </div>
  );
}
