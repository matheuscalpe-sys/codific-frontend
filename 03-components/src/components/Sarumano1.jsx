import { useState } from "react";

function Sarumano1() {
  const [resultado, setResultado] = useState("");

  function verificar() {
    const criancasPequenas = Number(prompt("Quantas crianças pequenas há perto do palco?"));
    const velocidadeVento = Number(prompt("Qual a velocidade do vento (m/s)?").replace(",", "."));

    if (criancasPequenas === 0 && velocidadeVento >= 0.5) {
      setResultado("Fumaça liberada. Que comecem os mistérios!");
    } else {
      setResultado("Fumaça bloqueada. Aguardar condições ideais.");
    }
  }

  return (
    <div className="Sarumano1">
      <h3>Sarumano</h3>
      <button onClick={verificar}>Sarumano - Fumaça</button>
      {resultado}
    </div>
  );
}

export default Sarumano1;