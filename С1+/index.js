'use strict';
//Месяца: январь - 1, декабрь - 12
function getDaysInMonth(year, month) {
  month -= 1;
  let date = new Date(+year, month, 32);
  
  return 32 - date.getDate();
}

console.log(getDaysInMonth('2016', '2'));
