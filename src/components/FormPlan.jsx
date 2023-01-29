import { useState } from "react";
import plan_icon from "../assets/icon-arcade.svg"
import PlanCard from "./PlanCard"

export default function FormPlan({ handleNext, handleBack }) {
    const [plan, setPlan] = useState("")
    const planData = [{ name: "Arcade", monthly: 9, icon: plan_icon }, { name: "Advanced", monthly: 12, icon: plan_icon }, { name: "Pro", monthly: 15, icon: plan_icon }]

    function renderPlans() {
        return (
            planData.map((plan, index) => {
                return <PlanCard key={index} name={plan.name} monthly={plan.monthly} icon={plan.icon} />
            })
        )
    }

    return (
        <div className="plan-section">
            <h2 className="plan-title">Select your plan</h2>
            <h4 className="plan-subtext">You have the option of monthly or yearly billing.</h4>
            <div className="plan-card-section">
                {renderPlans()}
            </div>
            <button className="form-personal-back" onClick={handleBack}>Go Back</button>
            <button className="form-personal-next" onClick={handleNext}>Next Step</button>
        </div>
    )
}