import { useRef, useState } from "react";

export default function Counter() {
  let ref = useRef(0);
  const [meuState, setMeuState] = useState(0);

  function handleRef() {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  }

  function handleState() {
    setMeuState(meuState + 1);
  }

  return (
    <>
      <button onClick={handleRef}>Alterar Ref!</button>
      <button onClick={handleState}>Alterar State!</button>
      <div>Meu ref:{ref.current}</div>
      <div>Meu state:{meuState}</div>
    </>
  );
}
