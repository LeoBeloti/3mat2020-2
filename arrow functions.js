// CARACTERÍSTICAS DA FUNÇÃO ABAIXO
// - tem apenas um parâmetro (argumento)
// - possui uma única linha de código com return
let quadrado = function(x) {
    return x * x
}
// Arrow function: sintaxe simplificada
// - Não usa a palavra-chave function
// - O único argumento não precisa de parênteses
// - Entre o argumento e o corpo da função vem o sinal de => (arrow, flecha)
// - A única linha de código não precisa nem de {} nem da palavra-chave return
let quadrado2 = x => x * x
console.log(quadrado(7))
console.log(quadrado2(7))
let potencia = function (base, exp) {
    return base ** exp
}
// Quando o número de argumentos != 0, os parênteses da lista
// de argumentos precisam ser mantidos
let potencia2 = (base, exp) => base ** exp
console.log(potencia(2, 5))
console.log(potencia2(2, 5))

// função tradicional sem argumentos

let msgErro = function(){
    console.log('erro inesperado')
}

// Retorna numero aleatorio entre 0 e 99

let aleatorio = function(){
    return Math.floor(Math.random() * 100)
}

msgErro()
console.log(aleatorio())

//arrow functions sem argumentos

let msgErro2 = () => console.log('erro inesperado')
let aleatorio2 = () => Math.floor(Math.random() * 100)

msgErro2()
console.log(aleatorio2())

// Função com 1+ argumentos
let areaTri = function(base, altura){
    return base * altura /2 // area de um triangulo

}

let areaTri2 =(base, altura) => base * altura /2