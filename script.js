// function print(){
//     console.log('Gabriel')
// }
var notas = []
var somaNotas = 0
var soma = 0
const btn = document.querySelector("#btn")
const textarea = document.querySelector("#area")
const input = document.querySelector(".nota")
const resultado = document.querySelector("#resultado")
btn.addEventListener("click", () => {
    notas.push(input.value)
    soma = soma + 1
    textarea.value = `${textarea.value}\nA nota ${soma} foi: ${input.value}`
    input.value = ""
})

const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {
    for(j of notas){
        somaNotas = somaNotas + parseFloat(j.replace(',', '.'), 10); 
    }
    var media = somaNotas/soma
    resultado.innerText = media.toFixed(2)
    notas = []
    media = 0
    soma = 0
    somaNotas = 0
})