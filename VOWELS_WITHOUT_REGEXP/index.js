let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Гласных букв: ${getVowels(value)}`;
}

//аеёиоуыэюя

function getVowels(value) {
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        let letter = value[i];
        if (letter == 'а' ||
            letter == 'е' ||
            letter == 'ё' ||
            letter == 'и' ||
            letter == 'о' ||
            letter == 'у' ||
            letter == 'ы' ||
            letter == 'э' ||
            letter == 'ю' ||
            letter == 'я'
        ) {
            result += 1;
        }
    }

    return result;

}