// declarando vetor
let vet1 = [] // forma 'moderna'

let vet2 = Array() // forma "tradicional"

let vet3 = ['azul', 'vermelho', 'verde'] // 'moderno'

let vet4 = Array(1, 2, 3, 4)

//como adicionar valores ao vetor

// Forma 1 : push() -- adiciona novos valores no FINAL dos vetores
vet1.push('laranja')
vet1.push('melancia')
vet1.push('pera')
console.log(vet1)

// Forma 2 : Unshift() -- adiciona novos valores ao INICIO dos vetores

vet1.unshift('jabuticaba')
vet1.unshift('acerola')
console.log(vet1)

// Forma 3: Splice() -- insere novo item em posição definida
// 1 parâmetro: posição de insersão
// 2 parâmetro: quantos elementos serão apagados
// 3 parâmetro: item a ser inserido
// O Splice sempre retorana um vetor

vet1.splice(3, 0, 'abacaxi')
vet1.splice(2, 0, 'uva')
vet1.splice(4, 1, 'maça')
console.log(vet1)

// Remoção de itens de um vetor

// Forma 1: pop() -- remove ultimo item do veotr
let removido = vet1.pop()
let removido2 = vet1.pop()
console.log(vet1, removido, removido2)

// forma 2: shift()
let removido3 = vet1.shift()
let removido4 = vet1.shift()
console.log(removido3, removido4, vet1)
//
vet1.push('abacate')
vet1.push('morango')
vet1.push('jaca')

// forma 3: splice()
let removido5 = vet1.splice(3, 1)
console.log(removido5, vet1)
