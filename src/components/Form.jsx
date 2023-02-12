import { useState } from "react";
// FORM COMPONENTS
import FormPersonalInfo from "./FormPersonalInfo";
import FormPlan from "./FormPlan";
import Addons from "./Addons";
import Summary from "./Summary";
import Complete from "./Complete";
// MUI
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles.js";

export default function Form({ step, handleNext, handleBack }) {
  //****  PERSONAL INFORMATION SECTION
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  //****  PLAN & ADDON SECTION
  const [plan, setPlan] = useState("Arcade");
  const [addon, setAddon] = useState([]);
  function handlePlan(selection) {
    setPlan(selection);
    console.log("Plan has been set", plan);
  }
  function handleAddon(selection) {
    //If the selection is not already in state (true then)
    !addon.includes(selection)
      ? setAddon((prev) => {
          return [...prev, selection];
        })
      : setAddon(addon.filter((x) => x !== selection));
  }
  //****  BILLING CONTROLS  |  True = Monthly  |  False = Yearly
  const [billing, setBilling] = useState(true);
  function handleBilling() {
    setBilling((prev) => !prev);
    console.log(billing);
  }
  return (
    <ThemeProvider theme={theme}>
      <div className="form-section">
        {step === 1 && (
          <FormPersonalInfo
            name={name}
            email={email}
            phone={phone}
            handleNext={handleNext}
            handleName={handleName}
            handleEmail={handleEmail}
            handlePhone={handlePhone}
          />
        )}
        {step === 2 && (
          <FormPlan
            handlePlan={handlePlan}
            handleNext={handleNext}
            handleBack={handleBack}
            plan={plan}
            billing={billing}
            handleBilling={handleBilling}
          />
        )}
        {step === 3 && (
          <Addons
            handleAddon={handleAddon}
            handleNext={handleNext}
            handleBack={handleBack}
            billing={billing}
            addon={addon}
          />
        )}
        {step === 4 && (
          <Summary
            plan={plan}
            addon={addon}
            billing={billing}
            handleBack={handleBack}
            handleBilling={handleBilling}
          />
        )}
        {step === 5 && <Complete />}
      </div>
      {/*////////// BUTTON SECTION **********/}
      <div className="nav-buttons">
        {/* Back Button after step 1 */}
        {step >= 2 && step <= 4 && (
          <Button className="form-back" onClick={handleBack}>
            Go Back
          </Button>
        )}
        {/* Next button and confirm for last step */}
        {step < 4 && (
          <Button
            variant="contained"
            color="primary"
            className="form-next"
            onClick={handleNext}
          >
            Next Step
          </Button>
        )}
        {step === 4 && (
          <Button className="form-confirm" onClick={handleNext}>
            Confirm
          </Button>
        )}
      </div>
    </ThemeProvider>
  );
}
