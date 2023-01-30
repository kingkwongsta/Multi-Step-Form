import { useState } from "react";
import FormPersonalInfo from "./FormPersonalInfo"
import FormPlan from "./FormPlan"
import Button from '@mui/material/Button';


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
            {step >= 2 && <Button className="form-back" onClick={handleBack}>Go Back</Button>}
            <Button className="form-next" onClick={handleNext}>Next Step</Button>
        </>
    )
}