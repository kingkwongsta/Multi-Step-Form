import { useState } from "react";
import FormPersonalInfo from "./FormPersonalInfo"
import FormPlan from "./FormPlan"

export default function Form({ step, handleNext, handleBack }) {
    //****  PERSONAL INFORMATION SECTION
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    function handleName(event) {
        setName(event.target.value)
    }
    function handleEmail(event) {
        setEmail(event.target.value)
    }
    function handlePhone(event) {
        setPhone(event.target.value)
    }
    // ************************************

    return (
        <>
            {step === 1 && <FormPersonalInfo name={name} email={email} phone={phone} handleNext={handleNext} handleName={handleName} handleEmail={handleEmail} handlePhone={handlePhone} />}
            {step === 2 && <FormPlan handleNext={handleNext} handleBack={handleBack} />}
        </>
    )
}