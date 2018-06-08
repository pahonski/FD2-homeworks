'use strict';

function deepCopy(value) {
  let result;

  switch(typeof value) {
    case 'object':
    if(value === null) {
      result = null;
    } else {
      switch(value.toString()) {
        case '[object Array]':
        result = value.map(deepCopy);
        break;
        case '[object Date]':
        result = new Date(value);
        break;
        default:
        result = Object.keys(value).reduce(function(prev, key) {
          prev[key] = deepCopy(value[key]);
          return prev;
        }, {});
      }
    }
    default:
    result = value;
  }
  return result;
}

var h1 = { a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };

var h2 = deepCopy(h1);

console.log(h2);

