window.addEventListener('load', function () {
  renderClock();
});

function renderClock() {
  var clock = document.querySelector('.clock');
  var hour = document.querySelector('.hour');
  var minute = document.querySelector('.minute');
  var second = document.querySelector('.second');

  var clockCenterX = clock.offsetLeft + clock.offsetWidth/2;
  var clockCenterY = clock.offsetTop + clock.offsetHeight/2;

  var circle = 360;
  var radius = 170;
  var angle = 150;
  var numContainerWidth = 30; //Временная мера
  var numContainerHeight = 30; //Временная мера

  var count = 1;

  hour.style.left = clockCenterX + 'px';
  hour.style.top = clockCenterY - hour.offsetHeight/2 + 'px';

  minute.style.left = clockCenterX + 'px';
  minute.style.top = clockCenterY - minute.offsetHeight/2 + 'px';

  second.style.left = clockCenterX + 'px';
  second.style.transformOrigin = clockCenterX + 'px';
  second.style.top = clockCenterY - second.offsetHeight/2 + 'px';

  while (count <= 12 && angle >= -180) {
    var numeral = document.createElement('div');
    var numeralCenterX = clockCenterX + radius * Math.sin(angle/180*Math.PI);
    var numeralCenterY = clockCenterY + radius * Math.cos(angle/180*Math.PI);
    numeral.classList.add('numeral-container');
    numeral.textContent = count;
    numeral.style.left = Math.round(numeralCenterX-numContainerWidth/2)+'px';
    numeral.style.top = Math.round(numeralCenterY-numContainerHeight/2)+'px';

    clock.appendChild(numeral);

    count++;
    angle -= 30;
  }

  setInterval(function () {
    second.style.transform = 'rotate(' + (+360/(+60)) + 'deg)';

  }, 1000)



}