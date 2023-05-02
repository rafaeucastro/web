const questao2 = document.getElementById('questao2')
questao2.addEventListener('click', function() {
    var number = prompt('Digite um número')
    var result = 'Negativo'
    if(number == 0) {
        result = 'Zero'
    } else if(number > 0){
        result = 'Positivo'
    }
    alert('O número digitado é: ' + result)
})