var firstNumber = 0
var secondNumber = 0
var result = 0
var userChoice = 'Somar'

//seleciona todos os dropdows itens
const dropdownItens = document.querySelectorAll('.dropdown-item');

dropdownItens.forEach(item => {
    //para cada dropdown adicionar um evento para escutar o click
    item.addEventListener('click', function(event) {
        userChoice = item.textContent.trim();
        const defaultDropdownValue = document.querySelector('#default-value')
        defaultDropdownValue.textContent = item.textContent;
    })
});

function calculate() {
    firstNumber = document.querySelector('#firstNumber').value
    secondNumber = document.querySelector('#secondNumber').value

    switch(userChoice) {
        case 'Somar':
            result = firstNumber + secondNumber
            break
        case 'Subtrair':
            result = firstNumber - secondNumber
            break
        case 'Multiplicar':
            result = firstNumber * secondNumber
            break
        case 'Dividir':
            result = firstNumber / secondNumber
            break
    }

    const resultText = document.querySelector('#result');
    resultText.innerHTML = result
}

function log() {
    console.log(firstNumber)
    console.log(userChoice)
    console.log(secondNumber)
}