const questao3 = document.getElementById('questao3')
questao3.addEventListener('click', function() {
    var number = prompt('Digite um número')
    var result = 'Par'
    if(number % 2 == 1) {
        result = 'Ímpar'
    }
    alert('O número digitado é: ' + result)
})