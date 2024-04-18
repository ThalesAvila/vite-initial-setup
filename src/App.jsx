import React from "react";
import { createRoot } from "react-dom/client";
import ExemploChildren from "./ExemploChildren";
import Layout from "./Layout";

export default function App() {
  return <Layout>Produtos</Layout>;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
