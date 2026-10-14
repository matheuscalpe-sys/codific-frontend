import { useState } from "react";
 function Sarumano3() {
  const [resultado, setResultado] = useState();
  function preparativos() {
    let somPocando = confirm("ta com o som pocante? ");
    let uniforme = confirm("ta com a farda completa? ",);

    if(somPocando && uniforme) {
        setResultado("Hora da magica")
    }else if(!somPocando && uniforme) {
        setResultado("tamo sem a JBL, bora de beatbox")
    }else if (somPocando && !uniforme) {
        setResultado("bora vestido de miranha então, dar altos mortal")
    }else{
        setResultado("cancela o show")
    }
    }
  

  return (
    <div className="Sarumano3">
      <h3>Preparativos</h3>
      <button onClick={preparativos}>tudo pronto pra festa?</button>
      {resultado}
    </div>
  );
}
export default Sarumano3