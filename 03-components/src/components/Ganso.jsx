import { useState } from "react";

function Ganso() {

    const [resultado, setResultado] = useState();
      function calcularProvisoes() {
        let marujos = Number(prompt("quantos marujos? "))
        let comida = Number(prompt("quantos kg de comida? "))

        if(comida >= 1.5 && marujos >= 10) {
            setResultado("tamo bem pra ir pro rio guaiba")
        } else {
            setResultado("rio ta cheio de merda, vai da não pia...")
        }

      }
    return(
        
        <div className='ganso'>
            <h3>Ganso</h3>
            <button onClick={calcularProvisoes}>Ganso - Provisões</button>
            {resultado}

        </div>

    )
}

export default Ganso