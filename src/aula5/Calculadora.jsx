import { useState } from "react";

export default function Calculadora() {
  const [expressao, setExpressao] = useState("");

  const [resultado, setResultado] = useState("");

  const handleChange = (e) => {
    setExpressao(e.target.value);
  };

  const handleCE = () => {
    setExpressao(expressao.substring(0, expressao.length - 1));
  };

  const handlePlus = () => {
    setExpressao(`${expressao}+`);
  };

  const handleMinus = () => {
    setExpressao(`${expressao}-`);
  };

  const handleEquals = () => {
    setResultado(eval(expressao));
  };

  return (
    <div>
      <input value={expressao} onChange={handleChange} />
      <div>
        <button onClick={handleCE}>CE</button>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
        <button onClick={handleEquals}>=</button>
      </div>
      Resultado: {`${resultado}`}
    </div>
  );
}
