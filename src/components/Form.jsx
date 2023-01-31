import { useState } from "react";
// FORM COMPONENTS
import FormPersonalInfo from "./FormPersonalInfo"
import FormPlan from "./FormPlan"
import Addons from "./Addons"
import Summary from "./Summary"
// MUI
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
    //****  PLAN & ADDON SECTION
    const [plan, setPlan] = useState("Arcade")
    const [addon, setAddon] = useState([])
    function handlePlan(selection) {
        setPlan(selection)
        console.log("Plan has been set", plan)
    }
    function addAddon(selection) {
        setAddon(prev => prev.push(selection))
        console.log(addon)
    }



    return (
        <>
            {step === 1 && <FormPersonalInfo name={name} email={email} phone={phone} handleNext={handleNext} handleName={handleName} handleEmail={handleEmail} handlePhone={handlePhone} />}
            {step === 2 && <FormPlan handlePlan={handlePlan} handleNext={handleNext} handleBack={handleBack} />}
            {step === 3 && <Addons addAddon={addAddon} handleNext={handleNext} handleBack={handleBack} />}
            {step === 4 && <Summary handleNext={handleNext} handleBack={handleBack} />}
            {step >= 2 && <Button className="form-back" onClick={handleBack}>Go Back</Button>}
            {step < 4 ? <Button className="form-next" onClick={handleNext}>Next Step</Button> : <Button className="form-confirm">Confirm</Button>}
        </>
    )
}