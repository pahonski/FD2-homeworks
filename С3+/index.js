function deepComp(val1, val2) {
  let val1Prop = 0;
  let val2Prop = 0;

  val1 = objectSort(val1);
  val2 = objectSort(val2);

 
  if (val1 === val2) {
    return true;
  }

  if (val1 == null || val2 == null || typeof (val1) != 'object' || typeof (val2) != 'object') {  
    return false;
  }

  for (let prop in val1) {
    val1Prop += 1;
  }

  for (let prop in val2) {
    val2Prop += 1;
    console.log(val1[prop]);
    if (!(prop in val1) || !deepComp(val1[prop], val2[prop])) {
      console.log('во дела');
      return false;
    }
  }


  function objectSort(obj) {
    let sortable = [];
    let result = {};

    for (let item in obj) {
      sortable.push([item, obj[item]]);
    }

    sortable.sort(function (a, b) {
      if (a[0] != Number && b[0] != Number) {
        return a[0].charCodeAt(0) - b[0].charCodeAt(0);
      }
      return a[0] - b[0];
    });

    sortable.forEach(item => {
      result[item[0]] = item[1];
    });
    return result;
  }

return val1Prop == val2Prop;
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

console.log(deepComp(6, 66));
// console.log(deepComp({ b1: 6}, { b1: 66}));
// console.log(deepComp({ b1: 6, b2: 7 }, { b1: 66, b2: 7 }));
// deepComp(H1, H4);
// console.log(deepComp(H1,H2))// => true
// console.log(deepComp(H1,H3))// => false
// console.log(deepComp(H1,H4))// => false
// console.log(deepComp(H1,H5))// => false
// console.log(deepComp(H6,H7))// => true
// console.log(deepComp(H8,H9))// => false
// console.log(deepComp(H8,H10))// => false
// console.log(deepComp(null,H10))// => false
// console.log(deepComp(H10,null))// => false
// console.log(deepComp(null,null))// => true
// console.log(deepComp(null,undefined))// => false
// console.log(deepComp(5,"5"))// => false
// console.log(deepComp(5,H1))// => false
// console.log(deepComp(A1,H1))// => false
// console.log(deepComp(A2,A3))// => false