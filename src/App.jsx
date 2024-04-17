import React from "react";
import { createRoot } from "react-dom/client";
import Button from "./Button";
import Gallery from "./Gallery";
import Table from "./Table";

const App = () => {
  return (
    <>
      {/* <Table />
      <Button /> */}
      <Gallery />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
