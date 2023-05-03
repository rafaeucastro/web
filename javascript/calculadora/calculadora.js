var firstNumber = 0
var secondNumber = 0
var operation = 0
var result = 0
var operation = 'Somar'

function dropdownClicked(value) {
    operation = value;
}

// Alterar as opções do dropdown
const options = document.querySelectorAll('.dropdown-item');
options.forEach(option => {
    option.addEventListener('click', function(event) {
        event.preventDefault;
        dropdownClicked(option.textContent.trim());
        document.querySelector('#default-value').innerHTML = option.textContent;
    })
});

function calculate() {
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
        case 'Dividir':
            result = firstNumber / secondNumber
            break
    }

    const result = document.querySelector('#result');
    result.innerHTML = 'resul'
}

document.querySelector('#calculate').addEventListener('click', function() {
    calculate();
})