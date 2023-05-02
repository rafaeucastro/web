const questao1 = document.getElementById('questao1')
questao1.addEventListener('click', function() {
    var firstNumber = prompt('Digite um número')
    var secondNumber = prompt('Digite outro número')
    var greater = firstNumber
    if(secondNumber > firstNumber) {
        greater = secondNumber
    }
    alert('O número maior é: ' + greater)
})