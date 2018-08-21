let addDrink = document.querySelector('.add-drink');
let addFood = document.querySelector('.add-food');
let addButton = addDrink.querySelector('.add-button');
let addButtonFood = document.querySelector('.add-button-food');
let alcValue = '';
let foodValue = '';

let drinkStorage = new LocStorage("drinks");
let foodStorage = new LocStorage('food');

if(localStorage.length > 0) {
  if(localStorage.getItem("drinks")) {
    drinkStorage.locHash = JSON.parse(localStorage.getItem("drinks"));
  }

  if(localStorage.getItem("food")) {
    foodStorage.locHash = JSON.parse(localStorage.getItem("food"));
  }
}



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

  drinkStorage.addValue(drinkName, dataValue);


  console.info('Напиток добавлен!');
  console.log(drinkStorage.locHash);
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

//food

let foodBox = addFood.querySelector('.food-fat-box');

foodBox.addEventListener('click', function (e) {
  if (e.target.name == 'fat') {
    foodValue = e.target.value;
    console.log(foodValue);
  }
});

addButtonFood.addEventListener('click', function () {

  let dataValue = {};

  let foodName = addFood.querySelector('#food-name').value.toLowerCase();

  let myReciple = addFood.querySelector('#reciple-food').value;

  dataValue.fat = foodValue;
  dataValue.reciple = myReciple;

  foodStorage.addValue(foodName, dataValue);


  console.info('Блюдо добавлено!');
});

let getValueButtonFood = document.querySelector('.get-value-button-food');

getValueButtonFood.addEventListener('click', function () {
  let key = document.querySelector('#get-value-food').value.toLowerCase();
  console.log(foodStorage.getValue(key));
});

let deleteValueButtonFood = document.querySelector('.delete-value-food');

deleteValueButtonFood.addEventListener('click', function () {
  let key = document.querySelector('#delete-value-food').value.toLowerCase();

  console.log(foodStorage.deleteValue(key));

});

let getKeysFood = document.querySelector('.get-keys-food');

getKeysFood.addEventListener('click', function () {

  console.log(foodStorage.getKeys());

});






