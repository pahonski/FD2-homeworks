'use strict';

function AjaxStorage(local) {
  this.locStorage = local;
  this.server = "https://fe.it-academy.by/AjaxStringStorage2.php";
  this.stringName = "KUZNIATSOU_DRINKS_AJAX_STORAGE";
  this.password = '';
  this.dataBase = [];
  this.emptyId = '';
  this.userData = '';
  this.currentId = '';
  this.searchID = false;

  let that = this;


  // this.getEmptyId = function () {
  //   $.ajax({
  //     url: this.server,
  //     type: 'POST',
  //     cache: false,
  //     dataType: 'json',
  //     data: {
  //       f: 'READ', n: this.stringName
  //     },
  //      success: function (callresult) {
  //       that.emptyId = JSON.parse(callresult.result).length;
  //       console.log(that.showId(that.emptyId));
  //       that.showId(that.emptyId);
  //       },
  //     error: that.ajaxErr
  //   });
  //
  // };

  this.showId = function (id) {
    console.log(id);
    return id;
  };

  this.addNewUser = function (data) {
    let that = this;
    this.userData = data;
    // this.dataBase.push(this.userData);
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ', n: this.stringName
      },
      success: that.readReady.bind(that),
      error: that.ajaxErr
    })
  };

  this.readReady = function (callresult) {
    let that = this;

    if (callresult.error != undefined) {
      alert(callresult.error);
    } else if (callresult.result != "") {
      console.log('Вызов, если ресулт не пустой', JSON.parse(callresult.result));
      if (Array.isArray(JSON.parse(callresult.result))) {
        console.log('Внутри');
        this.currentId = this.locStorage.id;
        console.log(this.currentId);
        this.changeBase();
      }
    } else if (callresult.result === "") {
      if (localStorage.getItem(this.locStorage.getName())) {
        console.log('Зашли к лок стораж');
        this.userData = localStorage.getItem(this.locStorage.getName());
        let data = JSON.parse(this.userData);
        data.id = this.emptyId;
        data = JSON.stringify(data);
        localStorage.setItem(this.locStorage.getName(), data);
        that.createBase(that.emptyId, JSON.parse(this.userData));
      } else {
        console.log('Зашли к крейт бейс');
        that.createBase(that.emptyId, JSON.parse(this.userData));
      }

    }
  };

  this.ajaxErr = function (jqXHR, statusStr, errorStr) {
    alert(statusStr + ' ' + errorStr);
  };

  this.createBase = function (id, data) {
    this.password = Math.random();
    console.log('Вызван createBase');
    console.log(this.dataBase);
    let that = this;
    data.id = id;
    this.dataBase.push(data);
    console.log('zirim', this.dataBase);
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: that.stringName, p: that.password
      },
      success: that.createReady,
      error: that.ajaxErr
    })
  };

  this.createReady = function (callresult) {
    console.log('зашли в CREATE реди', callresult);
    console.log('create ready', this.dataBase);
    if (callresult.error != undefined)
      alert(callresult.error);
    else {
      $.ajax({
        url: that.server,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.stringName, v: JSON.stringify(that.dataBase), p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  };

  this.changeBase = function () {
    console.log('Вызван changeBase');
    this.password = Math.random();
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: this.stringName, p: this.password
      },
      success: this.changeReady.bind(that),
      error: this.ajaxErr
    })
  };

  this.changeReady = function (callresult) {
    let that = this;
    if (callresult.error != undefined)
      alert(callresult.error);
    else {
      this.dataBase = JSON.parse(callresult.result);
      console.log('NACHINAEM');
      let a = localStorage.getItem(this.locStorage.getName());
      a = JSON.parse(a);
      console.log(a);
      console.log('Пришедшая дб',this.dataBase, 'id', a.id);

      console.log('у меня есть ID!!!!');
      this.dataBase.forEach((item) => {
        this.searchID = false;
        if(item.id = this.currentId) {
          this.searchID = true;
          console.log('ID НАЙДЕН!');
          return;
        }
      });


      if(this.searchID === true) {
        console.log('если id найден');
        that.dataBase.forEach((item) => {
          if(item.id = this.currentId) {
            item.data.push(that.userData);
          }
        });
        // userArray[0] = (that.userData.data);
      } else {
        console.log('если id не найден');
        that.userData.id = this.emptyId;
        that.dataBase.push(that.userData);
      }


      $.ajax({
        url: this.server,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.stringName, v: JSON.stringify(that.dataBase), p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  };

  this.clearBase = function () {
    this.dataBase = null;
  };

  this.updateReady = function (callresult) {
    console.log(callresult);
    if (callresult.error != undefined)
      alert(callresult.error);
  };

  this.clearBase = function () {
    console.log('Вызван clearBase');
    this.password = Math.random();
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: this.stringName, p: this.password
      },
      success: this.clearReady.bind(that),
      error: this.ajaxErr
    })
  };

  this.clearReady = function (callresult) {
    console.log(callresult);
    let that = this;
    if (callresult.error != undefined)
      alert(callresult.error);
    else {
      $.ajax({
        url: this.server,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.stringName, v: '', p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  }
}