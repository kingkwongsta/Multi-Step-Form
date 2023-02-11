import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FormNav from "./components/FormNav";
import Form from "./components/Form";

function App() {
  //Track what step to display
  const [step, setStep] = useState(1);
  //Move Foward with Next Button
  function handleNext() {
    setStep((prev) => (prev += 1));
    console.log("Next Submitted");
  }
  //Move Backward with Next Button
  function handleBack() {
    setStep((prev) => (prev -= 1));
    console.log("Back Submitted");
  }
  //Navigate to a step from Left Navbar
  function handleStepNav(selection) {
    setStep(selection);
  }
  return (
    <div className="App">
      <div className="form">
        <div className="left-side">
          <FormNav step={step} handleStepNav={handleStepNav} />
        </div>
        <div className="right-side">
          <Form step={step} handleNext={handleNext} handleBack={handleBack} />
        </div>
      </div>
    </div>
  );
}

export default App;
