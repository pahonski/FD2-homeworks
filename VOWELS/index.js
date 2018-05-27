let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Гласных букв: ${getVowels(value)}`;
}

function getVowels(value) {
    let result = value.replace(/[^аеёиоуыэюя]/ig, '');
    return result.length;
}