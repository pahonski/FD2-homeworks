let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Результат: ${calculate(value)}`;
}

function calculate(value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] == '(') {

        }
    }
}