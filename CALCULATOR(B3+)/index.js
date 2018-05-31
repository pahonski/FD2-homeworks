let button = document.querySelector('.button');
button.onclick = function() {
    let value = document.querySelector('.value').value;
    document.querySelector('.output').innerHTML = `Результат: ${calculate(value)}`;
}

function calculate(str) {
  let arr = parseString(str);

  console.log(arr);

  function searchFragment(arr) {
    
  }

  function calcFragment(frag) {

  }

  function parseString(str) {
    str = str.replace(/\s+/g, '');

    let part = '';
    let parts = [];
    let value = '';
    let prev = '';
    
    for(let i = 0; i < str.length; i++) {
      value = str[i];
      console.log(value);
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

    console.log(parts);

    return parts;
    
  }
}

