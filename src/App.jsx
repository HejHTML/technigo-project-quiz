import { useState } from "react";
import "./index.css";

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [framework, setFramework] = useState("");
  const [level, setLevel] = useState("");

  return (
    <div className="container">
      <h1>Developer Quiz</h1>
      {step === 1 && (
        <div>
          <label>
            Vad heter du?
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (name !== "") {
                    setStep(step + 1);
                  } else {
                    alert("Skriv ditt namn först!");
                  }
                }
              }}
            />
          </label>

          {/* Fortsätt-knapp */}
          <button
            onClick={() => {
              if (name !== "") {       // validering: måste skriva namn
                setStep(step + 1);
              } else {
                alert("Skriv ditt namn först!");
              }
            }}
          >
            Fortsätt
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="radio-group">
          <p>Favorit-ramverk?</p>

          <label>
            <input
              type="radio"
              name="framework"
              value="React"
              checked={framework === "React"}
              onChange={(e) => {
                setFramework(e.target.value);
                setStep(step + 1);
              }}
            />
            React
          </label>

          <label>
            <input
              type="radio"
              name="framework"
              value="Vue"
              checked={framework === "Vue"}
              onChange={(e) => {
                setFramework(e.target.value);
                setStep(step + 1);
              }}
            />
            Vue
          </label>

          <label>
            <input
              type="radio"
              name="framework"
              value="Angular"
              checked={framework === "Angular"}
              onChange={(e) => {
                setFramework(e.target.value);
                setStep(step + 1);
              }}
            />
            Angular
          </label>
        </div>
      )}

      {step === 3 && (
        <div>
          <label>
            Erfarenhetsnivå
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <option value="">Välj</option>
              <option value="Junior">Junior</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
            </select>
          </label>

          {/* Submit-knapp */}
          <button
            onClick={() => {
              if (level !== "") {
                setStep(4); // Visa summary
              } else {
                alert("Välj en nivå innan du skickar in!");
              }
            }}
          >
            Submit
          </button>
        </div>
      )}


      {step === 4 && (
        <div>
          <h2>Tack för dina svar!</h2>
          <p>Du svarade:</p>
          <p>Namn: {name}</p>
          <p>Framework: {framework}</p>
          <p>Level: {level}</p>
        </div>
      )}
    </div>
  );
};
