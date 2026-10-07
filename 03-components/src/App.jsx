import "./App.css";
import Jogo from "./components/Jogo";
import Pousada from "./components/Pousada";
import Votos from "./components/Votos";

function App() {
  return (
    <div className="app">
      <h1>estados e componentes</h1>

      <Jogo />
      <Pousada />
      <Votos />
    </div>
  );
}

export default App;
