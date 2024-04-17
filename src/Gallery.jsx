import { useState } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    setIndex(index === 0 ? 11 : index - 1);
  }

  function handleNext() {
    setIndex(index === 11 ? 0 : index + 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIndex(e.target.firstChild.value - 1);
  }

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      <form onSubmit={handleSubmit}>
        <input type="text" />
      </form>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}
