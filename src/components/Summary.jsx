import React from "react";
import planData from "../data/plan"
import addonsData from "../data/addon"

export default function Summary({ addon, plan }) {

    const temp = ["Online service", "Larger storage"]

    const renderAddons = temp.map(x => {
        const index = addonsData.map(y => y.title).indexOf(x)
        return (<p>{x} and {addonsData[index].monthly}</p>)
    })


    return (
        <div className="summary-section">
            <h2 className="form-title">Finishing up</h2>
            <p className="form-subtext">Double-check everything looks OK before confirming.</p>
            {renderAddons}
        </div>
    )
}