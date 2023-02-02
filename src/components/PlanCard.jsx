import React from "react";

export default function PlanCard({ name, monthly, yearly, billing, icon, handlePlan }) {
    function handleSelection(selection) {
        handlePlan(selection)
    }

    return (
        <div className="plan-card" onClick={() => handleSelection(name)}>
            <img src={icon} alt="" className="plan-card-icon" />
            <p className="plan-card-title">{name}</p>
            <p className="plan-card-price">{billing ? <>${monthly}/mo</> : <span>${yearly}/yr</span>}</p>
            <p className="yearly-offer">{!billing && "two months free"}</p>
        </div>
    )
}