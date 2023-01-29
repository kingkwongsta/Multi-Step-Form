import React from "react";

export default function PlanCard({ name, monthly, icon }) {
    return (
        <div className="plan-card">
            <img src={icon} alt="" className="plan-card-icon" />
            <p className="plan-card-title">{name}</p>
            <p className="plan-card-price">${monthly}/mo</p>
        </div>
    )
}