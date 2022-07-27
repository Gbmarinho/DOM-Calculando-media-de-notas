// function print(){
//     console.log('Gabriel')
// }
var notas = []
var somaNotas = 0
var soma = 1
const btn = document.querySelector("#btn")
const textarea = document.querySelector("#area")
const input = document.querySelector(".nota")
btn.addEventListener("click", () => {
    notas.push(input.value)
    textarea.value = `${textarea.value}\nA nota ${soma} foi: ${input.value}`
    input.value = ""
    soma = soma + 1
})
for(j of notas){
    somaNotas = somaNotas + j
}
const btn2 = document.querySelector("#btn2")
btn2.addEventListener("click", () => {

    console.log(print[0])
})