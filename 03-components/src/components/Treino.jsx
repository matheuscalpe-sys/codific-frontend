import { useState } from "react";

function Treino() {
  const [resultado, setResultado] = useState();
  function aprovacao() {
    let idade = Number(prompt("quantos anos vc tem? "));
    let sabeNadar = confirm("Você sabe nadar?");
    let temRecomendacao = confirm("Você tem carta de recomendação de outro pirata?",);

    if(idade >= 16 && sabeNadar) {
        setResultado("tu passou na peneira pra expedição do rio guaiba")
    }else if(!sabeNadar && temRecomendacao && idade >= 14) {
        setResultado("como o gurizão la te recomendou, ta passado")
    }else {
        setResultado("deu pra tu não meu cupinxa, treina la que na proxima tu vem")
    }
    }
  

  return (
    <div className="Treino">
      <h3>Aprovação</h3>
      <button onClick={aprovacao}>Aprovação pra expedição</button>
      {resultado}
    </div>
  );
}
export default Treino;
