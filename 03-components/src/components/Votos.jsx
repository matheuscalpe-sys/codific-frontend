import { useState } from "react";

function Votos() {
    const [resultado, setResultado] = useState();

    function votacao() {
        let idade = Number(prompt("quantos anos vc tem:"))
        
        if(idade < 16){
            setResultado("não pode votar")
        }else if(idade >= 16 && idade <= 18) {
            setResultado("voto facultativo")
        }else if(idade >= 18 && idade <= 65) {
            setResultado("voto obrigatório")
        }else{
            setResultado("voto facultativo")
        }
    }

    return (
    <div className="Votos">
      <h2>idade para votar</h2>
      <button onClick={votacao}>idade para votar</button>
      {resultado}
    </div>
  );
}

export default Votos