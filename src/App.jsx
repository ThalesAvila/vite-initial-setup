import React from "react";
import { createRoot } from "react-dom/client";

import Exemplo from "./aula9/ContextExample";

import "./assets/css/index.css";

export default function App() {
  return (
    <>
      <Exemplo />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
