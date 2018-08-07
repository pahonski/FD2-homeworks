'use strict';

window.addEventListener('load', function () {
  let board = new Board();
  board.createRackets();
  board.createBall();
  let moving = new Moving();
  document.querySelector('.button').addEventListener('click', () => { moving.go() });
});




class Board {
  constructor() {
    this.board = document.querySelector('.board');
    this.leftRacket = document.createElement('div');
    this.rightRacket = document.createElement('div');
    this.ball = document.createElement('div');
  }

  createRackets() {
    this.leftRacket.classList.add('left-racket');
    this.rightRacket.classList.add('right-racket');

    this.board.appendChild(this.leftRacket);
    this.board.appendChild(this.rightRacket);
  }

  createBall() {
    this.ball.classList.add('ball');
    this.board.appendChild(this.ball);
  }
}

class Moving {
  constructor() {
    let that = this;
    this.timerStatus = 0;
    this.keydown = null;
    this.leftRacket = document.querySelector('.left-racket');
    this.rightRacket = document.querySelector('.right-racket');
    this.ball = document.querySelector('.ball');
    this.area = {
      height: document.querySelector('.board').offsetHeight,
      width: document.querySelector('.board').offsetWidth
    };
    this.keyValues = {
      CTRL: 17,
      SHIFT: 16,
      DOWN: 40,
      UP: 38
    };
    this.score = {
      first: 0,
      second: 0
    };

    this.leftRacketSettings = {
      racketX: this.leftRacket.offsetLeft,
      racketY: this.leftRacket.offsetTop,
      speed: 5,
      width: this.leftRacket.offsetWidth,
      height: this.leftRacket.offsetHeight,
      update: () => {
        this.leftRacket.style.left=this.leftRacketSettings.racketX+"px";
        this.leftRacket.style.top=this.leftRacketSettings.racketY+"px";
      }
    };

    this.rightRacketSettings = {
      racketX: this.rightRacket.offsetLeft,
      racketY: this.rightRacket.offsetTop,
      speed: 5,
      width: this.rightRacket.offsetWidth,
      height: this.rightRacket.offsetHeight,
      update: () => {
        this.rightRacket.style.left=this.rightRacketSettings.racketX+"px";
        this.rightRacket.style.top=this.rightRacketSettings.racketY+"px";
      }
    };


    this.ballH={
      posX : this.ball.offsetLeft,
      posY : this.ball.offsetTop,
      speedX : 3.5,
      speedY : 1.5,
      accelX : 0,
      accelY : 0,
      width : 20,
      height: 20,

      update : function() {
        that.ball.style.left=Math.round(that.ballH.posX)+"px";
        that.ball.style.top=Math.round(that.ballH.posY)+"px";
      }
    };

    window.addEventListener('keydown', (e)=> {
      this.keydown = e.keyCode;
    });

    window.addEventListener('keyup', ()=> {
      this.keydown = null;
    });

  }

  randomAngleBall() {

  }

  goal(side) {
    let first = document.querySelector('.first-player');
    let second = document.querySelector('.second-player');
    if(side === 'left') {
      this.score.first += 1;
      first.innerHTML = this.score.first.toString();
    } else {
      this.score.second += 1;
      second.innerHTML = this.score.second.toString();
    }
  }

  resetScore() {
    let scoreFields = document.querySelectorAll('.score span');
    this.score.first = 0;
    this.score.second = 0;
    scoreFields.forEach(function (item) {
      item.innerHTML = '0';
    })
  }

  tick() {
    switch (this.keydown) {
      case this.keyValues.SHIFT:
        this.leftRacketSettings.racketY -= this.leftRacketSettings.speed;
        if ( this.leftRacketSettings.racketY < 0 ) {
          this.leftRacketSettings.racketY = 0;
        }
        break;
      case this.keyValues.CTRL:
        this.leftRacketSettings.racketY += this.leftRacketSettings.speed;
        if ( this.leftRacketSettings.racketY + this.leftRacketSettings.height > this.area.height ) {
          this.leftRacketSettings.racketY = this.area.height - this.leftRacketSettings.height - 2;
        }
        break;
      case this.keyValues.UP:
        this.rightRacketSettings.racketY -= this.rightRacketSettings.speed;
        if ( this.rightRacketSettings.racketY < 0 ) {
          this.rightRacketSettings.racketY = 0;
        }
        break;
      case this.keyValues.DOWN:
        this.rightRacketSettings.racketY += this.rightRacketSettings.speed;
        if ( this.rightRacketSettings.racketY + this.rightRacketSettings.height > this.area.height ) {
          this.rightRacketSettings.racketY = this.area.height - this.rightRacketSettings.height - 2;
        }
        break;
    }

    this.ballH.speedX+=this.ballH.accelX;
    this.ballH.posX+=this.ballH.speedX;
    this.ballH.posY+=this.ballH.speedY;

    // долетел ли мяч до правой ракетки
    if ( this.ballH.posX + this.ballH.width >= this.rightRacketSettings.racketX && this.ballH.posY >= this.rightRacketSettings.racketY && this.ballH.posY <= this.rightRacketSettings.racketY + this.rightRacketSettings.height) {
      console.log('opa');
      this.ballH.speedX=-this.ballH.speedX;
    }
    // вылетел ли мяч правее стены?
    if ( this.ballH.posX+this.ballH.width>this.area.width ) {
      this.goal('right');
      this.ballH.speedX=-this.ballH.speedX;
      this.ballH.posX=this.area.width-this.ballH.width;
    }

    // долетел ли мяч до левой ракетки
    if ( this.ballH.posX <= this.leftRacketSettings.racketX + this.leftRacketSettings.width && this.ballH.posY >= this.leftRacketSettings.racketY && this.ballH.posY <= this.leftRacketSettings.racketY + this.leftRacketSettings.height) {
      console.log('opa');
      this.ballH.speedX=-this.ballH.speedX;
    }
    // вылетел ли мяч левее стены?
    if ( this.ballH.posX<0 ) {
      this.goal('left');
      this.ballH.speedX=-this.ballH.speedX;
      this.ballH.posX=0;
    }

    this.ballH.speedY+=this.ballH.accelY;
    this.ballH.posY+=this.ballH.speedY;

    // вылетел ли мяч ниже пола?
    if ( this.ballH.posY+this.ballH.height>this.area.height ) {
      this.ballH.speedY=-this.ballH.speedY;
      this.ballH.posY=this.area.height-this.ballH.height;
    }

    if ( this.ballH.posY<0 ) {
      this.ballH.speedY=-this.ballH.speedY;
      this.ballH.posY=0;
    }

    this.ballH.update();
    this.leftRacketSettings.update();
    this.rightRacketSettings.update();
    this.timerStatus = requestAnimationFrame(this.tick.bind(this));
  }

  go() {
    this.resetScore();
    if(this.timerStatus) {
      console.log('Таймер существует', this.timerStatus);
      cancelAnimationFrame(this.timerStatus);
      this.timerStatus = 0;
      console.log('После чистки', this.timerStatus)
    }
    console.log('Таймера нет', this.timerStatus);
    this.timerStatus = requestAnimationFrame(this.tick.bind(this));
    console.log('Таймер присвоен', this.timerStatus);
    }
}
