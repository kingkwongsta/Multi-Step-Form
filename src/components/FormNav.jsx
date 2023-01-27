import React from "react";
import FormNavStep from "./FormNavStep"

export default function FormNav() {
    const steps = [{ stepNum: "1", name: "Your Info" }, { stepNum: "2", name: "Select Plan" }, { stepNum: "3", name: "ADD-ONS" }, { stepNum: "4", name: "Summary" }]
    const formNavElements = steps.map((step, index) => {
        return <FormNavStep key={index} stepNum={step.stepNum} name={step.name} />
    })

    return (
        <>
            {formNavElements}
        </>
    )
}