//Atividade 01
var num = prompt(`Digite um número:`)
if(num >= 0 && num % 2 == 0){
    console.log(`O número ${num} é positivo e par.`)
} else if (num < 0){
    console.log(`O número ${num} é negativo.`)
} else {
    console.log(`O número ${num} é positivo e ímpar`)
}

//Atividade 02
var weight = prompt(`Digite seu peso em kg:`)
var height = prompt(`Digite sua altura:`)
var imc = weight / (height ** 2)
if (imc < 18.5){
    console.log(`IMC: ${imc.toFixed(2)} - Magreza`)
} else if (imc < 24.9){
    console.log(`IMC: ${imc.toFixed(2)} - Peso Normal`)
} else if (imc < 29.9){
    console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`)
} else if (imc < 39.9){
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade`)
} else {
    console.log(`IMC: ${imc.toFixed(2)} - Obesidade Grave`)
}

//Atividade 03
var price = prompt(`Digite o preço do produto:`)
var age = prompt(`Digite sua idade:`)
var priceDescount = price - (0.1 * price)
if (age < 18){
    console.log(`Desconto de 10% - Preço a pagar: R$${priceDescount},00`)
} else {
    console.log(`Preço a pagar: R$${price},00`)
}

//Atividade 04
var sideOne = prompt(`Digite o lado 1 do triângulo:`)
var sideTwo = prompt(`Digite o lado 2 do triângulo:`)
var sideThree = prompt(`Digite o lado 3 do triângulo:`)
if (sideOne == sideTwo && sideOne == sideThree){
    console.log(`Temos um triângulo Equilátero.`)
} else if (sideOne != sideTwo && sideOne != sideThree && sideTwo != sideThree){
    console.log(`Temos um triângulo Escaleno.`)
}  else {
    console.log(`Temos um triângulo Isóceles.`)
}

//Atividade 05
var day = prompt(`Digite um número de 1 a 7:`)
switch(Number(day)){
    case 1:
        console.log(`Segunda`)
        break

    case 2:
        console.log(`Terça`)
        break

    case 3:
        console.log(`Quarta`)
        break

    case 4:
        console.log(`Quinta`)
        break

    case 5:
        console.log(`Sexta`)
        break

    case 6:
        console.log(`Sábado`)
        break

    case 7:
        console.log(`Domingo`)
        break

    default:
        console.log(`Não é uma escolha válida.`)
}

//Atividade 06
var num = prompt(`Digite um número:`)
cont = 0

if (num % 1 == 0){
    cont += 1
}
if (num % 2 == 0){
    cont += 1
}
if (num % 3 == 0){
    cont += 1
}
if (num % 5 == 0){
    cont += 1
}
if (num != 0 && num != 1 &&num != 2 && num != 3 && num != 5){    
    cont += 1
}

 if (cont == 2){
    console.log(`${num} é primo`)
 } else {
    console.log(`${num} não é primo`)
 }


//Desafio
var menu = prompt(`Você deseja calcular:
[1] Área do Triângulo
[2] Área do Retângulo
[3] Volume do Cubo
[4] Área do Circulo
[5] Sair`)

switch(Number(menu)){
    case 1:
        var base = prompt(`Medida da base:`)
        var height = prompt(`Medida da altura:`)
        var area = ((base * height) / 2).toFixed(2)
        console.log(`Área = ${(area)}`)
        window.alert(`Área = ${(area)}`)
        break
        

    case 2:
        var base = prompt(`Medida do lado1:`)
        var height = prompt(`Medida do lado2:`)
        var area = (base * height).toFixed(2)
        console.log(`Área = ${(area)}`)
        window.alert(`Área = ${(area)}`)
        break

    case 3:
        var edge = prompt(`Medida da aresta:`)
        var cube = (edge ** 3).toFixed(2)
        console.log(`Volume = ${cube}`)
        window.alert(`Volume = ${(cube)}`)
        break

    case 4:
        var radius = prompt(`Medida do raio:`)
        var area = ((radius ** 2) * Math.PI).toFixed(2)
        console.log(`Área = ${area}`)
        window.alert(`Área = ${area}`)
        break

    case 5:
        var exit = console.log(`O usuário saiu.`)
        window.alert(`Até a próxima.`)
        break

    default:
        alert(`Opção inválida.`)
        break
 }
