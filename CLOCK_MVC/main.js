window.addEventListener('load', function () {
  let container = document.querySelector('.container');

  let clock = new Clock();
  let clockDom = new ClockViewDOM();
  let controller = new ClockControllerButtons();

  clock.start(clockDom);
  clockDom.start(clock, container);
});