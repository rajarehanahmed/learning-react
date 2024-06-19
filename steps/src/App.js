import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    console.log("Prev")
    if (step > 1)
      setStep(step - 1)
  }

  function handleNext() {
    console.log("Next")
    if (step < 3)
      setStep(step + 1)
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
        
          <div className="message">Step {step}: {messages[step - 1]}</div>

          <div className="buttons">
            <button style={step === 1 ? {backgroundColor: 'grey', color: '#fff'} : {backgroundColor: '#7950f2', color: '#fff'}}
            onClick={handlePrev}
            disabled={step === 1}
            >
              Prev
            </button>
            <button style={step === 3 ? {backgroundColor: 'grey', color: "#fff"} : {backgroundColor: '#7950f2', color: '#fff'}}
            onClick={handleNext}
            // disable the button if the step is 3
            disabled={step === 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  )
}