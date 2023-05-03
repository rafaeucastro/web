var firstNumber = 0
var secondNumber = 0
var result = 0
var operation = 'Somar'

firstNumber = parseInt(prompt('Digite um número'))
secondNumber = parseInt(prompt('Digite outro número'))
operation = prompt('Qual a operação?')

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

document.write(result)