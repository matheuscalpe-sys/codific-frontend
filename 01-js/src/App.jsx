import './App.css'

function App() {
  
  function salario(){
    let mes = Number(prompt("quanto é seu salario mensal? "))
    let dias = Number(prompt("quantos dias vc trabalhou? "))

    let valorDias = mes / dias
    let valorSem = dias * 5

    alert("você recebe no dia " + valorDias)
    alert("você recebe na semana " + valorSem)
  }
  function pernambuco(){
    let custos = Number(prompt("quais são os custos mensais? "))
    let dizimo = Number(prompt("quais foram os lucros do dia? "))

    let resto = custos - dizimo

    alert("falta " + resto + " a ser pago")
  }
  function pomar(){
    let inicial = Number(prompt("quantas laranjas foram vendidas de dia? "))
    let final = Number(prompt("quantas laranjas foram vendidas de noite? "))

    let total = inicial + final

    alert("o total de vendas hoje foi " + total)
  }
  function empresa(){
    let estagiario = Number(prompt("quantos estagiarios tem? "))
    let pj = Number(prompt("quantos pejotas tem? "))
    let clt = Number(prompt("quantos ceéletes tem? "))

    let total = estagiario + pj + clt
    let descansando = total / 12

    alert("quantos funcionarios tem na empresa? " + total)
    alert("e quantos estão de folga? " + descansando)
  }
  function trocarSapatos(){
    let quantidade = Number(prompt("quantos sapatinhos de cinderela? "))
    let preço = Number(prompt("qual o preço de cada cinde- quero dizer, cada sapato? "))

    let valorTotal = quantidade * preço

    alert("valor total é: R$" + valorTotal.toFixed(2))
  }
  function calcularPontos(){
    let vitorias = Number(prompt("numero de vitorias"))
    let empates = Number(prompt("numero de empates"))
    let derrotas = Number(prompt("numero de derrotas"))

    let pontos = vitorias*3 + empates - derrotas*2
    

    alert("essa merda que tu chama de time tem: " + pontos)
  }
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

    <h2>EXERCICIOS meio MANEIROS</h2>

<button onClick={calcularPontos}>Pontuação</button>
<button onClick={trocarSapatos}>Trocas pé pequeno</button>
<button onClick={empresa}>Guigu portãos</button>
<button onClick={pomar}>trajeto pomar</button>
<button onClick={pernambuco}>Custos da igreja</button>
<button onClick={salario}>Salario</button>

    <hr />
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>média de nota</button>
   </div>
  )
}

export default App
