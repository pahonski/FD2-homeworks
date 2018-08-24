class Clock {
  constructor(name, time) {
    this.name = name;
    this.time = time;
    this.view = null;

    this.d = new Date();
    this.youTimeZone = this.d.getTimezoneOffset();

    this.timer = null;
    }

  timeConvertor() {
    let minskTime = this.youTimeZone * 60 * 1000;
    let hours = this.time * 60 * 60 * 1000;
    let date = new Date();
    let time = date.getTime() + hours;
    return new Date(time + +minskTime);
    }

  start(view) {
    this.view = view;
    this.view.clockGo(this.timeConvertor());
    this.updateView();
    this.timerStart();
  }

  updateView() {
    if(this.view) {
      this.view.update(this.timeConvertor());
    }
  }

  timerStop() {
    window.clearInterval(this.timer)
  }

  timerStart() {
    let that = this;
    this.timer = window.setInterval(
      function(){
        this.d = that.timeConvertor();
        that.updateView();
      }
      , 500);
  }
}