let addDrink = document.querySelector('.add-drink');
let addButton = addDrink.querySelector('.add-button');
let alcValue = '';

let drinkStorage = new HashStorage();

let alcoholBox = addDrink.querySelector('.drink-alcohol-box');

alcoholBox.addEventListener('click', function (e) {
  if (e.target.name == 'alcohol') {
    alcValue = e.target.value;
  }
});

addButton.addEventListener('click', function () {

  let dataValue = {};

  let drinkName = addDrink.querySelector('#drink-name').value.toLowerCase();

  let myReciple = addDrink.querySelector('#reciple').value;

  dataValue.alcohol = alcValue;
  dataValue.reciple = myReciple;

  drinkStorage.addValue(drinkName, dataValue);

  console.info('Напиток добавлен!');
});

let getValueButton = document.querySelector('.get-value-button');

getValueButton.addEventListener('click', function () {
  let key = document.querySelector('#get-value').value.toLowerCase();
  console.log(drinkStorage.getValue(key));
});

let deleteValueButton = document.querySelector('.delete-value-button');

deleteValueButton.addEventListener('click', function () {
  let key = document.querySelector('#delete-value').value.toLowerCase();

  console.log(drinkStorage.deleteValue(key));

});

let getKeys = document.querySelector('.get-keys');

getKeys.addEventListener('click', function () {

  console.log(drinkStorage.getKeys());

});






