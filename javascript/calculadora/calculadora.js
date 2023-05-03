var firstNumber = parseInt(prompt('Digite um número'))
var secondNumber = parseInt(prompt('Digite outro número'))
var operation = prompt('Qual a operação?')
var result = 0
var operation = 'Somar'

switch(operation) {
    case 'Somar':
        result = firstNumber + secondNumber
        break
    case 'Subtrair':
        result = firstNumber - secondNumber
        break
    case 'Multiplicar':
        result = firstNumber * secondNumber
        break
    case 'DIvidir':
        result = firstNumber / secondNumber
        break
}

document.write('<h1>' + 'Resultado: ' + result + '</h1>')