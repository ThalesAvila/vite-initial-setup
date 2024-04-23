import React, { useState } from "react";
import "./temperature.css";

function Input(props) {
  const [value, setValue] = useState("");
  const [montado, setMontado] = useState(true);

  return (
    <>
      {montado ? <h1>Estou Montadado</h1> : null}
      <button
        onClick={() => {
          setMontado(!montado);
        }}
      >
        Alternar
      </button>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temp in °C"
      />
      {props.render(value)}
    </>
  );
}

export default function App() {
  return (
    <div className="App">
      <h1>☃️ Temperature Converter 🌞</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      />
    </div>
  );
}

function Kelvin({ value }) {
  return <div className="temp">{parseInt(value || 0) + 273.15}K</div>;
}

function Fahrenheit({ value }) {
  return <div className="temp">{(parseInt(value || 0) * 9) / 5 + 32}°F</div>;
}
