import React from "react";
import { createRoot } from "react-dom/client";

import Store from "./aula11/eccommerce/Store";

import "./assets/css/index.css";

export default function App() {
  return (
    <>
      <Store />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
