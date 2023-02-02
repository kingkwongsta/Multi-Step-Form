import React from "react";
import planData from "../data/plan"
import addonsData from "../data/addon"
import SummaryAddon from "./SummaryAddon";

export default function Summary({ addon, plan, billing }) {

    // const temp = ["Online service", "Larger storage"]

    const renderAddons = addon.map((x, key) => {
        const index = addonsData.map(y => y.title).indexOf(x)
        return (
            <SummaryAddon key={key}
                title={x}
                billing={billing}
                monthly={addonsData[index].monthly}
                yearly={addonsData[index].yearly} />
        )
    })
    function planMoPrice() {
        const index = planData.map(x => x.name).indexOf(plan)
        return planData[index].monthly
    }
    function planYrPrice() {
        const index = planData.map(x => x.name).indexOf(plan)
        return planData[index].yearly
    }


    return (
        <div className="summary-section">
            <h2 className="form-title">Finishing up</h2>
            <p className="form-subtext">Double-check everything looks OK before confirming.</p>
            <div className="plan-section">
                <div className="plan-name">
                    {plan} {billing ? <span>(Monthly)</span> : <span>(Yearly)</span>}
                </div>
                <div className="plan-price">
                    +${billing ? planMoPrice() : planYrPrice()}/{billing ? <span>mo</span> : <span>yr</span>}
                </div>
            </div>
            <div className="addon-section">
                {renderAddons}
            </div>

        </div>
    )
}