import { useState } from "react";

// React Hook

const Button = () => {
  const [contador, setContador] = useState(0);

  const handleClickButton = (e) => {
    e.stopPropagation();
    setContador(contador + 1);
  };

  return (
    <div
      style={{
        padding: 20,
        backgroundColor: "blue",
        color: "#FFF",
      }}
    >
      {contador}
      <button onClick={handleClickButton}>Clique Aqui!</button>
    </div>
  );
};

export default Button;
