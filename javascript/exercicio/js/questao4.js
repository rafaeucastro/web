const questao1=4 = document.getElementById('questao4')

questao4.addEventListener('click', function() {
    var firstNumber = prompt('Digite um número')
    var secondNumber = prompt('Digite outro número')
    var thirdNumber = prompt('mais um, por favor número')
    var greater = firstNumber;

    if(secondNumber > thirdNumber) {
        greater = secondNumber
    }
    alert('O número maior é: ' + greater)
})