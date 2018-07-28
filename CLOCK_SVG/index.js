window.addEventListener('load', function () {
  clock();
});

function clock() {
  var clock = document.querySelector('.clock');
  var hour = document.querySelector('.hour');
  var minute = document.querySelector('.minute');
  var second = document.querySelector('.second');

  var d = new Date();

  var clockCenterX = clock.offsetLeft + clock.offsetWidth/2;
  var clockCenterY = clock.offsetTop + clock.offsetHeight/2;

  var radius = 170;
  var angle = 150;
  var numContainerWidth = 30;
  var numContainerHeight = 30;

  var count = 1;

  renderClock();
  document.querySelector('.digital-time').innerHTML = d.toLocaleTimeString();
  clockGo(d);

  window.setInterval(
    function(){
      d = new Date();
      document.querySelector('.digital-time').innerHTML = d.toLocaleTimeString();
      clockGo(d);
      console.log('hi');
    }
    , 500);

  function renderClock() {

    console.log(clockCenterX - hour.offsetWidth/2);

    hour.setAttribute("y1", "0");
    hour.setAttribute("x1", clockCenterX - hour.offsetWidth/2 + " ");

    hour.style.top = clockCenterY - hour.offsetHeight + 'px';

    minute.style.left = clockCenterX - minute.offsetWidth/2 + 'px';
    minute.style.top = clockCenterY - minute.offsetHeight + 'px';

    second.style.left = clockCenterX - second.offsetWidth/2 + 'px';
    second.style.top = clockCenterY - second.offsetHeight + 'px';
    console.log(clockCenterY - second.offsetHeight/2 + 'px');

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
  }

  function clockGo(d) {
    var t_sec = 6*d.getSeconds();
    var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());
    second.style.transform = "rotate(" + t_sec +"deg)";
    minute.style.transform = "rotate(" + t_min +"deg)";
    hour.style.transform = "rotate(" + t_hour +"deg)";

  }
}

