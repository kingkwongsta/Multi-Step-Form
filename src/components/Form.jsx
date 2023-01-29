import React from "react";
import FormPersonalInfo from "./FormPersonalInfo"
import FormPlan from "./FormPlan"

export default function Form({ step, handleNext, handleBack }) {
    return (
        <>
            {step === 1 && <FormPersonalInfo handleNext={handleNext} />}
            {step === 2 && <FormPlan handleNext={handleNext} handleBack={handleBack} />}
        </>
    )
}