import { useState } from "react";
import "./index.css";

export const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [funSprint, setFunSprint] = useState("");
  const [learnedSprint, setLearnedSprint] = useState("");

  return (
    <div className="container">
      <h1>Technigo Sprintquiz</h1>

      {/* Steg 1: Namn */}
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

          <button
            onClick={() => {
              if (name !== "") {
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

      {/* Steg 2: Roligaste sprint (radiobuttons) */}
      {step === 2 && (
        <div className="radio-group">
          <p>Vilken sprint på Technigos kurs har varit roligast?</p>

          <label>
            <input
              type="radio"
              name="funSprint"
              value="HTML & CSS"
              checked={funSprint === "HTML & CSS"}
              onChange={(e) => {
                setFunSprint(e.target.value);
                setStep(step + 1);
              }}
            />
            HTML & CSS
          </label>

          <label>
            <input
              type="radio"
              name="funSprint"
              value="JavaScript"
              checked={funSprint === "JavaScript"}
              onChange={(e) => {
                setFunSprint(e.target.value);
                setStep(step + 1);
              }}
            />
            JavaScript
          </label>

          <label>
            <input
              type="radio"
              name="funSprint"
              value="React"
              checked={funSprint === "React"}
              onChange={(e) => {
                setFunSprint(e.target.value);
                setStep(step + 1);
              }}
            />
            React
          </label>
        </div>
      )}

      {/* Steg 3: Lärt mest av (dropdown) */}
      {step === 3 && (
        <div>
          <label>
            Vilken sprint har du lärt dig mest av?
            <select
              value={learnedSprint}
              onChange={(e) => setLearnedSprint(e.target.value)}
            >
              <option value="">Välj</option>
              <option value="HTML & CSS">HTML & CSS</option>
              <option value="JavaScript">JavaScript</option>
              <option value="React">React</option>
            </select>
          </label>

          <button
            onClick={() => {
              if (learnedSprint !== "") {
                setStep(4); // Visa summary
              } else {
                alert("Välj en sprint innan du skickar in!");
              }
            }}
          >
            Submit
          </button>
        </div>
      )}

      {/* Steg 4: Summary */}
      {step === 4 && (
        <div>
          <h2>Tack för dina svar!</h2>
          <p>Du svarade:</p>
          <p>Namn: {name}</p>
          <p>Roligaste sprint: {funSprint}</p>
          <p>Jag har lärt mig mest av: {learnedSprint}</p>
        </div>
      )}
    </div>
  );
};
