window.addEventListener('load', function () {
  let container = document.querySelector('.container');

  let clock = new Clock('Нью-Йорк', '-5');
  let clockDom = new ClockViewDOM();
  let controller = new ClockControllerButtons();

  clock.start(clockDom);
  clockDom.start(clock, container, 1);
  controller.start(clock, 1);


  let clock2 = new Clock('Лондон', '1');
  let clockDom2 = new ClockViewDOM();
  let controller2 = new ClockControllerButtons();

  clock2.start(clockDom2);
  clockDom2.start(clock2, container, 2);
  controller2.start(clock2, 2);

  let clock3 = new Clock('Минск', '3');
  let clockDom3 = new ClockViewDOM();
  let controller3 = new ClockControllerButtons();

  clock3.start(clockDom3);
  clockDom3.start(clock3, container, 3);
  controller3.start(clock3, 3);
});