class ClockViewDOM {
  constructor() {
    this.model = null;
    this.container = null;

    this.clock = document.createElement('div');
    this.hour = document.createElement('div');
    this.minute = document.createElement('div');
    this.second = document.createElement('div');
    this.point = document.createElement('div');

    this.count = 1;
    this.radius = 85;
    this.angle = 150;
    this.numContainerWidth = 30;
    this.numContainerHeight = 30;

    let that = this;
  }

  render() {
    this.clock.classList.add('clock');
    this.hour.classList.add('hour');
    this.minute.classList.add('minute');
    this.second.classList.add('second');

    this.clock.appendChild(this.hour);
    this.clock.appendChild(this.minute);
    this.clock.appendChild(this.second);
    this.container.appendChild(this.clock);

    this.clockCenterX = this.clock.offsetLeft + this.clock.offsetWidth/2;
    this.clockCenterY = this.clock.offsetTop + this.clock.offsetHeight/2;

    this.hour.style.left = this.clockCenterX - this.hour.offsetWidth/2 + 'px';
    this.hour.style.top = this.clockCenterY - this.hour.offsetHeight + 'px';

    this.minute.style.left = this.clockCenterX - this.minute.offsetWidth/2 + 'px';
    this.minute.style.top = this.clockCenterY - this.minute.offsetHeight + 'px';

    this.second.style.left = this.clockCenterX - this.second.offsetWidth/2 + 'px';
    this.second.style.top = this.clockCenterY - this.second.offsetHeight + 'px';

    while (this.count <= 12 && this.angle >= -180) {
      let count = this.count.toString();
      let numeral = document.createElement('div');
      let numeralCenterX = this.clockCenterX + this.radius * Math.sin(this.angle/180*Math.PI);
      let numeralCenterY = this.clockCenterY + this.radius * Math.cos(this.angle/180*Math.PI);
      numeral.classList.add('numeral-container');
      numeral.textContent = count;
      numeral.style.left = Math.round(numeralCenterX-this.numContainerWidth/2)+'px';
      numeral.style.top = Math.round(numeralCenterY-this.numContainerHeight/2)+'px';

      this.clock.appendChild(numeral);

      this.count++;
      this.angle -= 30;
    }
  }

  start(model, container) {
    this.model = model;
    this.container = container;
    this.render();
    this.update();
  }

  update() {
    this.second.style.transform = "rotate(" + this.model.t_sec +"deg)";
    this.minute.style.transform = "rotate(" + this.model.t_min +"deg)";
    this.hour.style.transform = "rotate(" + this.model.t_hour +"deg)";
  }
}