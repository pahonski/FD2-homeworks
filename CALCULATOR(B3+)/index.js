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
        console.log(tempArray);

        tempArray.forEach((element, index) => {

            if (element == ')') {
                range.push(index);
                for (let i = index; i >= 0; i--) {
                    if (tempArray[i] == '(') {
                        range.unshift(i);
                        fragmentArr = tempArray.slice(range[0] + 1, range[1]);
                        console.log('()', fragmentArr, 'range', range);
                        if (fragmentArr.length > 3) {
                            console.log('tempArray', tempArray);
                            let temp = searchFragment(fragmentArr);
                            console.log('temp', temp);
                            tempArray.splice(range[0], range[1] - 1, temp[0]);
                            console.log('tempArraySplice', tempArray);
                        } else {
                            console.log('tempArray', tempArray);
                            tempArray.splice(range[0], fragmentArr.length + 2, calcFragment(fragmentArr));
                        }
                        range = [];
                        fragmentArr = [];

                    }
                }
            }
        });

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