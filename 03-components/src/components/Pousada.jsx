import { useState } from "react";

function Pousada() {
    const [resultado, setResultado] = useState();

    function dias() {
        let dias = Number(prompt("Quantos dias? "))
        let valorDiaria

        if(dias <= 5) {
            valorDiaria = 100
            let conta = (dias*valorDiaria)*0.75 + 150;
            setResultado(conta)
        }else if(dias >= 6 && dias <= 10) {
            valorDiaria = 90
            let conta = (dias*valorDiaria)*0.75 + 150;
            setResultado(conta)
        }else if(dias >= 11) {
            valorDiaria = 80
            let conta = (dias*valorDiaria)*0.75 + 150;
            setResultado(conta)
        }else{
         setResultado("ué")
        }

    }

    return (
    <div className="Pousada">
      <h2>pousada do juquinha</h2>
      <button onClick={dias}>Contagem de dias</button>
      {resultado}
    </div>
  );
}

export default Pousada