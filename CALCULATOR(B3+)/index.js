let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Результат: ${calculate(value)}`;
}

function calculate(str) {
  let myArr = parseString(str);
  searchFragment(myArr);

  function searchFragment(arr) {
    console.log(arr);
    let range = [];
    let fragmentArr = [];

    arr.forEach((element, index) => {
      
      if(element == ')') {
        range.push(index);
        for(let i = index; i >= 0; i--) {
          if(arr[i] == '(') {
            range.unshift(i);
            fragmentArr = arr.slice(range[0] + 1, range[1]);
            myArr.splice(range[0], fragmentArr.length + 2, calcFragment(fragmentArr));
            range = [];
            fragmentArr = [];
          }
        }
      }
    });

    arr.forEach(function(item, index) {
      console.log(item);
      if(item == '*') {
        fragmentArr = arr.slice(index - 1, index + 2);
        
        console.log(fragmentArr);
        myArr.splice(index -1, 3, calcFragment(fragmentArr));
        console.log(myArr);
        fragmentArr = [];
    }
    });

    
    
  }

  function calcFragment(frag) {
    let result = 0;

    frag.forEach(function(item, index){
      switch(item) {
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
    
    for(let i = 0; i < str.length; i++) {
      value = str[i];
      switch(value) {
        case '+':
        case '*':
        case '/':
        case '(':
        case ')':
          if(part) {
            parts.push(part);
            part = '';
          }
          parts.push(value);
        break;
        case '-':
          if(part) {
            parts.push(part);
            part = '';
            parts.push(value);
          } else {
            if (      i === 0     ||
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
        console.log(part);  
        default: part += value;
      }
      prev = value;
    }
    
    if(part) {
      parts.push(part);
    }

    return parts;
    
  }
}

