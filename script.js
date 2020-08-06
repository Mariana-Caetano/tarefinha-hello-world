console.log("foi")


// h2
// Button

let input = document.querySelector("input")
let texto = document.querySelector("h2")
let botao = document.querySelector("button")

console.log(input)
console.log(texto)
console.log(botao)

function cliquei() {
    event.preventDefault()
    texto.innerHTML = input.value
}

