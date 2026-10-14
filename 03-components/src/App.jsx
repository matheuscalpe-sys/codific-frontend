import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Votos from "./components/Votos";
import Ganso from "./components/Ganso"; 
import Treino from "./components/Treino"; 
import Sarumano1 from "./components/Sarumano1";
import Sarumano2 from "./components/Sarumano2";
import Sarumano3 from "./components/Sarumano3";

function App() {
  return (
    <div className="app">
      <h1>estados e componentes</h1>

      <h2>#0030</h2>
      <Ganso />
      <Treino />
      <Sarumano1 />
      <Sarumano2 />
      <Sarumano3 />

      <h2>0027</h2>
      <Jogo />
      <Pousada />
      <Votos />
    </div>
  );
}

export default App;
