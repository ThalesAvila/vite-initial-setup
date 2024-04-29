import React from "react";
import { createRoot } from "react-dom/client";
import RenderProps from "./aula5/RenderProps";
import UseRefExample from "./aula5/UseRefExample";
import VideoPlayerApp from "./aula5/VideoPlayerApp";
import DogFriends from "./aula5/DogFriends";
import Calculadora from "./aula5/Calculadora";
// import Temperature from "./aula5/Temperature";
import Counter from "./aula4/Counter";
import FocusInput from "./aula5/FocusInput";
import Gallery from "./aula3/Gallery";
import Layout3 from "./ecommerce/Layout3";
import Exemplo from "./aula6/Exemplo";

import "./assets/css/index.css";

export default function App() {
  return (
    <>
      <Layout3 />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
