const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")

const perguntas = [

    "Qual é o maior deserto do mundo?",
    "Qual é a capital do Brasil?",
    "Qual é a capital da Austrália?",
    "Qual é o país com maior população no mundo?",
    "Qual a linha imaginária que atravessa o Brasil?",
    "Qual o oceano que banha o Brasil?",
]

let indiceperguntas = 0



function iniciarjogo() {
    fecharbotaoinicio ()
    abrirareajogo ()
}

function fecharbotaoinicio() {
    diviniciar.innerHTML = ""

}

function abrirareajogo () {
    divareajogo.classList.add("active")

   let botaopergunta =  document.createElement("button")
   botaopergunta. textContent = perguntas[indiceperguntas]
   botaopergunta.classList.add("answer-btn")
   areaperguntas. appendChild(botaopergunta)
 
}

function proximapergunta() {
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
    abrirareajogo()
    else
    alert("Não existem mais perguntas")
}