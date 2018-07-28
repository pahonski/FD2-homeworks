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

  var center = 270;
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

    while (count <= 12 && angle >= -180) {
      var g = document.createElementNS("http://www.w3.org/2000/svg",'g');
      var numeral = document.createElementNS("http://www.w3.org/2000/svg",'circle');
      var text = document.createElementNS("http://www.w3.org/2000/svg",'text');
      numeral.setAttribute("r", "15");
      numeral.setAttribute("fill", "#48B382");

      var numeralCenterX = center + radius * Math.sin(angle/180*Math.PI);
      var numeralCenterY = center + radius * Math.cos(angle/180*Math.PI);
      numeral.classList.add('numeral-container');

      numeral.setAttribute("cx", Math.round(numeralCenterX-numContainerWidth/2));
      numeral.setAttribute("cy", Math.round(numeralCenterY-numContainerHeight/2));

      text.setAttribute("x", Math.round(numeralCenterX-numContainerWidth/2));
      text.setAttribute("y", Math.round(numeralCenterY + 5 - numContainerHeight/2));
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("stroke", "black");
      text.setAttribute("stroke-width", "1px");
      text.innerHTML = count;

      g.appendChild(numeral);
      g.appendChild(text);
      clock.appendChild(g);

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

