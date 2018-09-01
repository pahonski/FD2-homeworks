let addDrink = document.querySelector('.add-drink');
let addFood = document.querySelector('.add-food');
let addButton = addDrink.querySelector('.add-button');
let addButtonFood = document.querySelector('.add-button-food');
let alcValue = '';
let foodValue = '';


let drinkAjax = new AjaxStorage();

//drinkAjax.clearBase();




//drink

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



  drinkAjax.addAjaxValue(drinkName, dataValue);

});

let getValueButton = document.querySelector('.get-value-button');

getValueButton.addEventListener('click', function () {
  let key = document.querySelector('#get-value').value.toLowerCase();
  console.log(drinkAjax.getValue(key));
});

let deleteValueButton = document.querySelector('.delete-value-button');

deleteValueButton.addEventListener('click', function () {
  let key = document.querySelector('#delete-value').value.toLowerCase();

  console.log(drinkAjax.deleteValue(key));

});

let getKeys = document.querySelector('.get-keys');

getKeys.addEventListener('click', function () {

  console.log(drinkAjax.getKeys());

});








