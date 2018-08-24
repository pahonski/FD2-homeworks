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

  let clockSvg = new Clock('Берлин', '3');
  let clockDomSvg = new ClockViewSVG();
  let controllerSvg = new ClockControllerButtons();

  clockSvg.start(clockDomSvg);
  clockDomSvg.start(clockSvg, container, 3);
  controllerSvg.start(clockSvg, 3);
  // clockDomSvg.render();

  let clockSvg2 = new Clock('Токио', '7');
  let clockDomSvg2 = new ClockViewSVG();
  let controllerSvg2 = new ClockControllerButtons();

  clockSvg2.start(clockDomSvg2);
  clockDomSvg2.start(clockSvg2, container, 4);
  controllerSvg2.start(clockSvg2, 4);

});