function deepComp(val1, val2) {

  if (typeof val1 === 'undefined' && typeof val2 === 'undefined') {
    return true;
  }

  if (typeof val1 === 'number' && typeof val2 === 'number') {
    if (isNaN(val1) && isNaN(val2)) {
      return true;
    }
    return val1 === val2;
  }

  if (Array.isArray(val1) && Array.isArray(val2)) {
    if (val1.length != val2.length) {
      return false;
    } else {
      for (let i = 0; i < val1.length; i++) {
        if (!(deepComp(val1[i], val2[i]))) {
          return false
        }
      }
      return true;
    }
  }

  if (typeof val1 === 'object' && typeof val2 === 'object') {
    if (val1 === null && val2 === null) {
      return true;
    } else if (val1 === null && val2 !== null){
      return false;
    } else if (val2 === null && val1 !== null) {

    } else {
      let valProperty1 = 0;
      let valProperty2 = 0;

      for (let prop in val1) {
        valProperty1 += 1;
      }

      for (let prop in val2) {
        valProperty2 += 1;

        if (!(prop in val1) || !(deepComp(val1[prop], val2[prop]))) {
          return false;
        }
      }

      return valProperty1 == valProperty2;
    }


  }

  return val1 === val2;
}

var H1 = { a: 5, b: { b1: 6, b2: 7 } };
var H2 = { b: { b1: 6, b2: 7 }, a: 5 };
var H3 = { a: 5, b: { b1: 6 } };
var H4 = { a: 5, b: { b1: 66, b2: 7 } };
var H5 = { a: 5, b: { b1: 6, b2: 7, b3: 8 } };
var H6 = { a: null, b: undefined, c: Number.NaN };
var H7 = { c: Number.NaN, b: undefined, a: null };
var H8 = { a: 5, b: 6 };
var H9 = { c: 5, d: 6 };
var H10 = { a: 5 };
var A1 = [5, 7];
var A2 = [5, 5, 7];
var A3 = [5, 8, 7];


console.log(deepComp(H1, H2)) // => true
console.log(deepComp(H1, H3)) // => false
console.log(deepComp(H1, H4)) // => false
console.log(deepComp(H1, H5)) // => false
console.log(deepComp(H6, H7)) // => true
console.log(deepComp(H8, H9)) // => false
console.log(deepComp(H8, H10)) // => false
console.log(deepComp(null, H10)) // => false
console.log(deepComp(H10, null)) // => false
console.log(deepComp(null, null)) // => true
console.log(deepComp(null, undefined)) // => false
console.log(deepComp(5, "5")) // => false
console.log(deepComp(5, H1)) // => false
console.log(deepComp(A1, H1)) // => false
console.log(deepComp(A2, A3)) // => false