class Clock {
  constructor(name, time) {
    this.name = name;
    this.time = time;
    this.view = null;

    this.count = 1;
    this.radius = 85;
    this.angle = 150;
    this.numContainerWidth = 30;
    this.numContainerHeight = 30;

    this.d = new Date();
    this.youTimeZone = this.d.getTimezoneOffset();
    console.log(this.youTimeZone);

    this.t_sec = null;
    this.t_min = null;
    this.t_hour = null;

    this.timer = null;

    this.clockGo(this.timeConvertor());

  }

  timeConvertor() {
    let minskTime = this.youTimeZone * 60 * 1000;
    let hours = this.time * 60 * 60 * 1000;
    let date = new Date();
    let time = date.getTime() + hours;
    return new Date(time + +minskTime);
    }

  start(view) {
    this.updateView();
    let that = this;
    this.view = view;
    this.timer = window.setInterval(
      function(){
        this.d = that.timeConvertor();
        that.clockGo(d);
        that.updateView();
      }
      , 500);
  }

  updateView() {
    if(this.view) {
      this.view.update();
    }
  }

  clockGo(d) {
    this.t_sec = 6*d.getSeconds();
    this.t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    this.t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());
  }

  timerStop() {
    window.clearInterval(this.timer)
  }

  timerStart() {
    let that = this;
    this.timer = window.setInterval(
      function(){
        this.d = that.timeConvertor();
        that.clockGo(d);
        that.updateView();
      }
      , 500);
  }
}