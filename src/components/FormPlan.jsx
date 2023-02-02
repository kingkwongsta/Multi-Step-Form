import { useState, useEffect } from "react";
import PlanCard from "./PlanCard"
import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import planData from "../data/plan"


export default function FormPlan({ handlePlan, handleNext, handleBack, billing, handleBilling }) {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(prev => !prev)
    }, [billing])
    function renderPlans() {
        return (
            planData.map((plan, index) => {
                return <PlanCard key={index}
                    name={plan.name}
                    monthly={plan.monthly}
                    yearly={plan.yearly}
                    icon={plan.icon}
                    handlePlan={handlePlan}
                    billing={billing} />
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
            <div>
                <span>Monthly</span><Switch checked={checked} onClick={handleBilling} /><span>Yearly</span>
            </div>

            {/* <Button className="form-personal-back" onClick={handleBack}>Go Back</Button>
            <Button className="form-personal-next" onClick={handleNext}>Next Step</Button> */}
        </div>
    )
}