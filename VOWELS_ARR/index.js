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
        if (current in vowels) {
            return sum + 1;
        } else {
            return sum + 0;
        }
    }, 0);

    return result;
}


console.log(getVowelsWithForEach('Привет, как дела?'));
console.log(getVowelsWithFilter('Привет, как дела?'));
console.log(getVowelsWithReduce('Привет, как дела?'));