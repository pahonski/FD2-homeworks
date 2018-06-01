let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Результат: ${calculate(value)}`;
};

function calculate(str) {
    let myArr = parseString(str);
    let result = searchFragment(myArr);

    function searchFragment(arr) {
        let range = [];
        let fragmentArr = [];
        let tempArray = arr;

        for (let j = 0; j < tempArray.length; j++) {
            console.log('!!!!', tempArray);
            if (tempArray[j] == ')') {
                range.push(j);
                for (let i = j; i >= 0; i--) {

                    if (tempArray[i] == '(') {
                        console.log(i, '(');
                        range.unshift(i);
                        fragmentArr = tempArray.slice(range[0] + 1, range[1]);

                        if (fragmentArr.length > 3) {
                            let temp = searchFragment(fragmentArr);
                            tempArray.splice(range[0], (range[1] - range[0] + 1), temp[0]);

                        } else {
                            console.log(tempArray);
                            console.log(range, tempArray[range[0]]);
                            tempArray.splice(range[0], fragmentArr.length + 2, calcFragment(fragmentArr));
                            console.log(tempArray);

                        }
                        range = [];
                        fragmentArr = [];
                        j = 0;
                        break;

                    }


                }
                console.log(tempArray);
            }
        }

        for (let i = 0; i <= tempArray.length; i++) {
            if (tempArray[i] == '*' || tempArray[i] == '/') {
                fragmentArr = tempArray.slice(i - 1, i + 2);
                tempArray.splice(i - 1, 3, calcFragment(fragmentArr));
                fragmentArr = [];
                i = 0;

            }
        }

        for (let i = 0; i <= tempArray.length; i++) {
            if (tempArray[i] == '+' || tempArray[i] == '-') {
                fragmentArr = tempArray.slice(i - 1, i + 2);
                tempArray.splice(i - 1, 3, calcFragment(fragmentArr));
                fragmentArr = [];
                i = 0;

            }
        }


        if (tempArray.length <= 1) {
            return tempArray;
        }


    }

    function calcFragment(frag) {
        let result = 0;

        frag.forEach(function(item, index) {
            switch (item) {
                case '+':
                    result = +frag[0] + +frag[2];
                    break;
                case '-':
                    result = +frag[0] - +frag[2];
                    break;
                case '*':
                    result = +frag[0] * +frag[2];
                    break;
                case '/':
                    result = +frag[0] / +frag[2];
                    break;
            }
        });
        return result;
    }

    function parseString(str) {
        str = str.replace(/\s+/g, '');

        let part = '';
        let parts = [];
        let value = '';
        let prev = '';

        for (let i = 0; i < str.length; i++) {
            value = str[i];
            switch (value) {
                case '+':
                case '*':
                case '/':
                case '(':
                case ')':
                    if (part) {
                        parts.push(part);
                        part = '';
                    }
                    parts.push(value);
                    break;
                case '-':
                    if (part) {
                        parts.push(part);
                        part = '';
                        parts.push(value);
                    } else {
                        if (i === 0 ||
                            prev == '+' ||
                            prev == '-' ||
                            prev == '*' ||
                            prev == '/' ||
                            prev == '('
                        ) {
                            part = value;
                        } else {
                            parts.push(value);
                        }
                    }
                    break;

                default:
                    part += value;
            }
            prev = value;
        }

        if (part) {
            parts.push(part);
        }

        return parts;

    }



    if (result.length === 1) {
        return result[0];
    }
}