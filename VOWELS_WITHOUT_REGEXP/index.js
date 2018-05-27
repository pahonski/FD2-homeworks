let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Гласных букв: ${getVowels(value)}`;
}

//аеёиоуыэюя

function getVowels(value) {
    let result = 0;
    let vowels = {
        а: true,
        е: true,
        ё: true,
        и: true,
        о: true,
        у: true,
        ы: true,
        э: true,
        ю: true,
        я: true
    }

    for (let i = 0; i < value.length; i++) {
        let letter = value[i];
        if (letter in vowels) {
            result += 1;
        }
    }

    return result;

}