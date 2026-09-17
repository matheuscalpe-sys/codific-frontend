import './App.css'

function App() {
 
  function capitao(){
    let gastos = Number(prompt("quais foram seus gastos? "))
    let lucro1 = Number(prompt("quais foram seus lucros com os ingressos? "))
    let lucro2 = Number(prompt("quais foram seus lucros com os itens? "))

    let lucroGeral = lucro1 + lucro2 - gastos
    let percentual = lucroGeral / gastos * 100

    alert("seu lucro foi " + lucroGeral)
    alert("seu lucro percentual foi " + percentual)
  }
  function faturamento(){
    let bruto = Number(prompt("lucro bruto: "))
    let presentes = Number(prompt("gasto em presentes: "))
    let premiações = Number(prompt("gasto em premiações: "))
    let suborno = Number(prompt("gasto em suborno: "))

    let lucro = bruto - presentes - premiações - suborno

    alert("seu lucro foi: " + lucro.toFixed(2))

  }
  function frete(){
    let distancia = Number(prompt("qual a distancia para a encomenda? "))
    let peso = Number(prompt("qual o peso da encomenda? "))
    let volume = Number(prompt("qual o volume da encomenda? "))

    let frete = 15 + (2*peso) + (0,5*distancia) + (10*volume)

    alert(`o valor do frete é: ${frete}`)
  }

//bloco A abaixo e bloco B acima ('-')

  function monika(){
    let vezes = Number(prompt("quantas vezes o candidato mexeu no celular? "))

    let chance = (0.1/(1 + 500 * vezes)) * 100

    alert(`as chances do canditato passar são: ${chance}`)
  }
  function caminhao(){
    let pesoBruto = Number(prompt("qual é o peso total? "))
    let tara = Number(prompt("qual é o peso do caminhão sem a carga? "))

    let carga = pesoBruto - tara

    alert("o peso da carga é: " + carga)
  }
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
<button onClick={caminhao}>Peso do caminhão</button>
<button onClick={monika}>Chance dos candidatos</button>
<button onClick={frete}>Valor do frete</button>
<button onClick={faturamento}>Faturamento casa de apostas</button>
<button onClick={capitao}>Faturamento do capitão ganso</button>

    <hr />
    <button onClick={testar}>Testar</button>
    <button onClick={calcularMedia}>média de nota</button>
   </div>
  )
}

export default App
