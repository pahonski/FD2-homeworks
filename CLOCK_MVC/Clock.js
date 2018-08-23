class Clock {
  constructor() {
    this.view = null;

    this.d = new Date();

    this.t_sec = null;
    this.t_min = null;
    this.t_hour = null;

    this.timer = null;

    this.clockGo(this.d);

  }

  start(view) {
    this.updateView();
    let that = this;
    this.view = view;
    this.timer = window.setInterval(
      function(){
        this.d = new Date();
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
        this.d = new Date();
        that.clockGo(d);
        that.updateView();
      }
      , 500);
  }
}