class ClockViewDOM {
  constructor() {
    this.model = null;
    this.container = null;
    this.id = null;

    this.d = '';

    this.t_sec = null;
    this.t_min = null;
    this.t_hour = null;

    this.clockContainer = document.createElement('div');
    this.clockHeader = document.createElement('div');
    this.clockName = document.createElement('span');
    this.stopButton = document.createElement('button');
    this.startButton = document.createElement('button');
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
    this.clockContainer.classList.add('clock-container');
    this.clockContainer.id = this.id;

    this.clockHeader.classList.add('clock-header');

    this.stopButton.classList.add('stop-button');
    this.stopButton.type = 'button';
    this.stopButton.innerHTML = 'Стоп';

    this.startButton.classList.add('start-button');
    this.startButton.type = 'button';
    this.startButton.innerHTML = 'Старт';

    this.clockName.innerHTML = this.model.name;

    this.clockHeader.appendChild(this.stopButton);
    this.clockHeader.appendChild(this.startButton);
    this.clockHeader.appendChild(this.clockName);

    this.clock.classList.add('clock');
    this.hour.classList.add('hour');
    this.minute.classList.add('minute');
    this.second.classList.add('second');

    this.clock.appendChild(this.hour);
    this.clock.appendChild(this.minute);
    this.clock.appendChild(this.second);
    this.clockContainer.appendChild(this.clock);
    this.clockContainer.appendChild(this.clockHeader);
    this.container.appendChild(this.clockContainer);

    console.log(this.clock.offsetLeft, this.clock.offsetWidth/2);

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

  start(model, container, id) {
    this.model = model;
    this.d = this.model.timeConvertor();
    this.id = id.toString();
    this.container = container;
    this.render();
    this.update(this.d);
  }

  clockGo(d) {
    this.t_sec = 6*d.getSeconds();
    this.t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds());
    this.t_hour = 30*(d.getHours() + (1/60)*d.getMinutes());
  }

  update(d) {
    this.clockGo(d);
    this.second.style.transform = "rotate(" + this.t_sec +"deg)";
    this.minute.style.transform = "rotate(" + this.t_min +"deg)";
    this.hour.style.transform = "rotate(" + this.t_hour +"deg)";
  }
}