import { useState } from "react";

    function Sarumano2() {
        const [resultado, setResultado] = useState();

      function deslocar () {
        let gripe = confirm("Ta com gripe?")
        let tempo = Number(prompt("qual é o tempo de viagem"))
        
        if (gripe && tempo <= 45) {
            setResultado("simbora trampar")
        }else{
            setResultado("vai da não")
        }
      }
        return (
    <div className="Sarumano2">
      <h3>Sarumano se deslocando </h3>
      <button onClick={deslocar}>Sarumano - Deslocamento</button>
      {resultado}
    </div>
  );
    }


export default Sarumano2