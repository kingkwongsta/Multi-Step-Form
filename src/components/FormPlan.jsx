import { useState } from "react";
import plan_icon from "../assets/icon-arcade.svg"

export default function FormPlan() {
    const [plan, setPlan] = useState("")
    const planData = [{ name: "Arcade", m_price: 9, icon: plan_icon }, { name: "Advanced", m_price: 12, icon: plan_icon }, { name: "Pro", m_price: 15, icon: plan_icon }]
    // function renderPlans(){
    //     return
    // }

    return (
        <div className="plan-section">
            <h2 className="plan-title">Select your plan</h2>
            <h4 className="plan-subtext">You have the option of monthly or yearly billing.</h4>
            <div className="plan-card-section">
                <div className="plan-card">test</div>
                <div className="plan-card">test</div>
                <div className="plan-card">test</div>
            </div>
        </div>
    )
}