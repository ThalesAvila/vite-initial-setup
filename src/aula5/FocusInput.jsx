import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input id="meuInput" ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
