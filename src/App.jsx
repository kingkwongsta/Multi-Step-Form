import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FormNav from "./components/FormNav";
import Form from "./components/Form";

function App() {
  const [step, setStep] = useState(1);
  function handleNext() {
    setStep((prev) => (prev += 1));
    console.log("Next Submitted");
  }
  function handleBack() {
    setStep((prev) => (prev -= 1));
    console.log("Back Submitted");
  }
  return (
    <div className="App">
      <div className="form">
        <div className="left-side">
          <FormNav step={step} />
        </div>
        <div className="right-side">
          <Form step={step} handleNext={handleNext} handleBack={handleBack} />
        </div>
      </div>
    </div>
  );
}

export default App;
//comments to test git on other computer
