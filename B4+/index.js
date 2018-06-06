function searchTrueArray(firstWord, secondWord, vocabulary) {
  let arr = vocabulary;
  let newArr = [firstWord];
  let arrCounter = 0;
  let counter = 0;
  let concurrences = 0;

  while (arrCounter < arr.length + 1) {
    for (let i = 0; i <= arr.length; i++) {
      let element = arr[i];
      if (element !== undefined) {
        for (let k = 0; k < element.length; k++) {
          if (element[k] === newArr[newArr.length - 1][k]) {
            counter++;
          }
        }

        if (counter === 3) {
          newArr.push(arr.splice(i, 1, undefined)[0]);
          arrCounter++;
        }
        counter = 0;
      }
    }
    arrCounter++;
  }



  newArr.push(secondWord);


  return newArr.join('-');


};

console.log(searchTrueArray('ЛИСА', 'ЛОСЬ', ["ТАРА", "ЛИПА", "ТУРА", "ЛУЖА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"]));
console.log(searchTrueArray('МУХА', 'СЛОН', ["ТАРА", "ЛИПА", "ТУРА", "ЛУЖА", "ПАРК", "ЛОЖЬ", "ЛУПА", "ПЛОТ", "МУРА", "ПАУК", "ПАУТ", "ПЛУТ", "ЛОЖА", "СЛОТ", "ПАРА"]));
