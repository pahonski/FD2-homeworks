class ClockControllerButtons {
  constructor() {
    this.model = null;
    this.container = null;
    this.startButton = null;
    this.stopButton = null;
  }

  start(model, elementId) {
    let that = this;
    this.model = model;
    this.container = document.getElementById(elementId.toString());
    this.startButton = this.container.querySelector('.start-button');
    this.startButton.addEventListener('click', that.startClock.bind(this));
    this.stopButton = this.container.querySelector('.stop-button');
    this.stopButton.addEventListener('click', that.stopClock.bind(this));

    console.log(this.model);
  }

  stopClock() {
    this.model.timerStop();

  }

  startClock() {
    this.model.timerStart();
  }




}