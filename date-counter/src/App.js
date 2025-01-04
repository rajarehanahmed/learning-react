import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  let [step, setStep] = useState(1);
  let [count, setCount] = useState(0);
  let [currentDate, setCurrentDate] = useState(new Date());

  function handleStep(operation) {
    if (operation === "+") {
      setStep(step + 1);
    } else if (operation === "-" && step > 1) {
      setStep(step - 1);
    }
  }

  function handleCount(operation) {
    if (operation === "+") {
      setCount(count + step);
    } else if (operation === "-") {
      setCount(count - step);
    }
    handleDateChange(count + step);
  }

  function handleDateChange(changeCount) {
    let currentDate = new Date(); // Get the current date and time
    let updatedDate = new Date(currentDate); // Create a copy of the current date
    updatedDate.setDate(currentDate.getDate() + changeCount); // Add/subtract days
    setCurrentDate(updatedDate); // Update the state with the new date
  }

  return (
    <div>
      <div>
        <button onClick={() => handleStep("-")} disabled={step <= 1}>
          -
        </button>
        <text>Step: {step}</text>
        <button onClick={() => handleStep("+")}>+</button>
      </div>
      <div>
        <button onClick={() => handleCount("-")}>-</button>
        <text>Count: {count}</text>
        <button onClick={() => handleCount("+")}>+</button>
      </div>
      <div>
        <text>
          {count === 0
            ? "Today is "
            : `${Math.abs(count)} day${[1, -1].includes(count) ? "" : "s"} ` +
              (count < 0 ? "ago was " : "from today is ")}
          {currentDate.toDateString()}{" "}
        </text>
      </div>
    </div>
  );
}
