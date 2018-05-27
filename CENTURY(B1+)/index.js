let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Век: ${getCentury(value)}`;
}

let getCentury = value => Math.ceil(value / 100);