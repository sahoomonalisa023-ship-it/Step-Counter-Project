const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  function handlePrev() {
    setStep((s) => (s < 3 ? s + 1 : s));
  }
  function handleNext() {
    setStep((s) => (s > 1 ? s - 1 : s));
  }

  return (
    <div className="contanier">
      <div className="step">
        <Header step={step} />
        <Text step={step} />
        <Button btn1={handlePrev} btn2={handleNext} />
      </div>
    </div>
  );
}

function Header({ step }) {
  return (
    <div className="header">
      <div className={`num ${step >= 1 && step < 2 ? "active" : "inactive"}`}>
        1
      </div>
      <div className={`num ${step >= 2 && step < 3 ? "active" : "inactive"}`}>
        2
      </div>
      <div className={`num ${step >= 3 ? "active" : "inactive"}`}>3</div>
    </div>
  );
}

function Text({ step }) {
  return (
    <div className="text">
      <h1>{messages[step - 1]}</h1>
    </div>
  );
}

function Button({ btn1, btn2 }) {
  return (
    <div className="button">
      <button onClick={btn2} className="btn">
        Previous
      </button>
      <button onClick={btn1} className="btn">
        Next
      </button>
    </div>
  );
}
