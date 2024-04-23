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

import "./aula5/dog-friends.css";

const FirstComponent = () => <h1>✨ First render prop! ✨</h1>;
const SecondComponent = () => <h2>🔥 Second render prop! 🔥</h2>;
const ThirdComponent = () => <h3>🚀 Third render prop! 🚀</h3>;

const ExemploRenderProps = () => {
  return (
    <RenderProps
      renderFirstComponent={() => <FirstComponent />}
      renderSecondComponent={() => <SecondComponent />}
      renderThirdComponent={() => <ThirdComponent />}
    />
  );
};

export default function App() {
  return (
    <>
      <Gallery />
    </>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
