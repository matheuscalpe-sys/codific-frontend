import { useState } from "react";

function Jogo() {
  const [resultado, setResultado] = useState();
  function Classificar() {
    let pontos = Number(prompt("Quantos pontos? "));
    if (pontos <= 10) {
      setResultado("Se ferrou chinelão...");
    }else if(pontos <= 100) {
        setResultado("continua que é sucesso guri")
    }else if(pontos <= 200) {
        setResultado("ai sim hein pia de merda")
    }else{
        setResultado("bah, ai sim vai ter a resenha na baia dos guri, é de cair os butcha do bolso")
    }
  }
  return (
    <div className="Jogo">
      <h2>jogo do mano juca</h2>
      <button onClick={Classificar}>Classificar</button>
      {resultado}
    </div>
  );
}

export default Jogo;
