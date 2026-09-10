import './App.css'

function App() {
  
  function testar(){
    alert("pare de apertar meu botãozinho onichan (>-<)")
  }

  function calcularMedia(){
    let nota1 = Number(prompt('Fala a primeira nota:'))
    let nota2 = Number(prompt('Fala a segunda nota:'))

    let media = (nota1+nota2) / 2
    alert("sua nota final é: " + media)
  }

  return (
   <div className="cont-app">

    <h1>JAVA(script) NO REACTO</h1>
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>média de nota</button>
   </div>
  )
}

export default App
