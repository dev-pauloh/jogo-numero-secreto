const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

console.log(numeroSecreto)

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

