import React from "react";

export default function FormNavStep({ stepNum, name }) {
    return (
        <div className="step-section">
            <div className="circle">
                <span className="form-circle">{stepNum}</span>
            </div>
            <div className="step-text">
                <h3 className="step">STEP {stepNum.toUpperCase()}</h3>
                <h3 className="step-subtext">{name.toUpperCase()}</h3>
            </div>
        </div>
    )
}