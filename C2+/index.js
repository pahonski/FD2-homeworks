'use strict';

function deepCopy(value) {
  let result;
  if(typeof value === 'object') {
    
    if(value === null) {
      result = null;
    } else {
      
      if(Array.isArray(value)) {
        result = value.map(function(item){
        
          return deepCopy(item);
        });
      } else if (value instanceof Date) {
        result = new Date(value);
      } else {
        result = Object.keys(value).reduce(function(obj, item){
          obj[item] = deepCopy(value[item]);
          return obj;
        }, {});
        
      }
      // switch(value.toString()) {
      //   case '[object Array]':
      //   let test = deepCopy(value);
      //   console.log('test', test);
      //   result = value.map(deepCopy);
      //   break;
      //   case '[object Date]':
      //   result = new Date(value);
      //   break;
      //   default:
      //   result = Object.keys(value).reduce(function(prev, key) {
      //     prev[key] = deepCopy(value[key]);
      //     return prev;
      //   }, {});
      // }
    }
  } else {
    result = value;
  }
  return result;
}

// var h1 = { a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN };//{ a:5, b:{b1:6,b2:7}, c:[33,22], d:null, e:undefined, f:Number.NaN }

// var h2 = deepCopy(h1);


// console.log(h2);

// console.log(h1 === h2);//=> false
// console.log(h1.a===h2.a);// => true
// console.log(h1.b===h2.b);// => false
// console.log(h1.b.b1===h2.b.b1);// => true
// console.log(h1.c===h2.c);// => false
// console.log(h1.c[0]===h2.c[0]);// => true
// console.log(h1.d===h2.d);// => true
// console.log(h1.e===h2.e);// => true
// console.log(isNaN(h2.f));// => true
// console.log(h2.c instanceof Array);// => true

var a1=[ 5, {b1:6,b2:7}, [33,22], null, undefined, Number.NaN];
var a2=deepCopy(a1);
console.log(a1===a2)// => false
console.log(typeof(a2)===typeof(a1))// => true
console.log(a1[0]===a2[0])// => true
console.log(a1[1]===a2[1])// => false
console.log(a1[1].b1===a2[1].b1)// => true
console.log(a1[2]===a2[2])// => false
console.log(a1[2][0]===a2[2][0])// => true
console.log(a1[3]===a2[3])// => true
console.log(a1[4]===a2[4])// => true
console.log(isNaN(a2[5]))// => true
console.log(a2[2] instanceof Array)// => true

