let modeButton = document.querySelector('.mode');
let mode = 'foreach';
modeButton.onclick = function(e) {
    let modeElement = e.target;
    mode = modeElement.textContent;
    let allModeElements = document.querySelectorAll('.modeButton');
    allModeElements.forEach(function(el) {
        el.classList.remove('active');
    })
    modeElement.classList.add('active');
    console.log(mode);
}



let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    let output = document.querySelector('.output');
    switch(mode) {
        case 'foreach' :
        output.innerHTML = `Гласных букв: ${getVowelsWithForEach(value)}`;
        break;
        case 'filter' :
        output.innerHTML = `Гласных букв: ${getVowelsWithFilter(value)}`;
        break;
        case 'reduce' :
        output.innerHTML = `Гласных букв: ${getVowelsWithReduce(value)}`;
        break;
    }
    
}

//аеёиоуыэюя


function getVowelsWithForEach(value) {
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

    let valueArray = value.split('');
    
    valueArray.forEach(function(item) {
        if (item in vowels) {
            result += 1;
        }
    });

    let implementation =  document.querySelector('.implementation');
    implementation.innerHTML = `<pre>
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

    let valueArray = value.split('');
    
    valueArray.forEach(function(item) {
        if (item in vowels) {
            result += 1;
        }
    });

    return result;

    </pre>`;


    return result;
}

function getVowelsWithFilter(value) {
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

    let valueArray = value.split('');
    
    let result = valueArray.filter(function(item) {
        return item in vowels;
    });



    let implementation =  document.querySelector('.implementation');
    implementation.innerHTML = `<pre>
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

    let valueArray = value.split('');
    
    let result = valueArray.filter(function(item) {
        return item in vowels;
    });

    return result.length;
    </pre>`;


    return result.length;
}

function getVowelsWithReduce(value) {
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

    let valueArray = value.split('');
    
    let result = valueArray.reduce(function(sum, current) {
        if(current in vowels) {
            return sum + 1;
        } else {
            return sum + 0;
        }
    },0);

    console.log(result);



    let implementation =  document.querySelector('.implementation');
    implementation.innerHTML = `<pre>
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

    let valueArray = value.split('');
    
    let result = valueArray.reduce(function(sum, current) {
        if(current in vowels) {
            return sum + 1;
        } else {
            return sum + 0;
        }
    },0);

    return result;

    </pre>`;


    return result;
}