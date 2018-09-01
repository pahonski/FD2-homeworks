'use strict';

function AjaxStorage() {
  this.serverHash = {};
  this.server = "https://fe.it-academy.by/AjaxStringStorage2.php";
  this.stringName = "KUZNIATSOU_DRINKS_AJAX_STORAGE";
  this.serverLoad = '';
  this.password = '';



  let that = this;

  this.readFromServer = function () {
    $.ajax({
          url: this.server,
          type: 'POST',
          cache: false,
          dataType: 'json',
          data: {
            f: 'READ', n: this.stringName
          },
          success: that.readFromServerReady,
          error: that.ajaxErr
        })
  };

  this.readFromServerReady = function (callback) {
    if(callback.error !== undefined) {
      console.log(callback.error);
    }

    if(callback.result === '') {
      console.log('База пуста!');
      that.serverLoad = false;
      console.log(that.serverLoad);
    }

    if(callback.result !== '') {
      that.serverHash = JSON.parse(callback.result);
      that.serverLoad = true;
      console.log(that.serverLoad);
      console.log(that.serverHash);
    }

  };

  this.readFromServer();

  this.addAjaxValue = function (key, value) {
    that.serverHash[key] = value;
    that.password = Math.random();
    console.log(that.serverHash);
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: that.stringName, p: that.password
      },
      success: that.addAjaxValueReady,
      error: that.ajaxErr
    })
  };

  this.addAjaxValueReady = function (callback) {
    if (callback.error !== undefined)
      alert(callback.error);
    else {
      $.ajax({
        url: that.server,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: that.stringName, v: JSON.stringify(that.serverHash), p: that.password
        },
        success: that.updateReady,
        error: that.ajaxErr
      })
    }
  };

  this.updateBase = function () {
    that.password = Math.random();
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: that.stringName, p: that.password
      },
      success: that.updateBaseReady,
      error: that.ajaxErr
    })
  };

  this.updateBaseReady = function () {
    $.ajax({
      url: that.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'UPDATE', n: that.stringName, v: JSON.stringify(that.serverHash), p: that.password
      },
      success: that.updateReady,
      error: that.ajaxErr
    })
  };

  this.updateReady = function (callresult) {
    console.log(callresult, 'UPDATE');
    if (callresult.error != undefined)
      alert(callresult.error);
  };

  this.ajaxErr = function (jqXHR, statusStr, errorStr) {
    console.log(statusStr + ' ' + errorStr);
  };

  this.getValue = function (key) {
    let result;
    if(key in that.serverHash) {
      result = that.serverHash[key];
    }

    return result ? result : undefined;
  };

  this.deleteValue = function (key) {
    let result = false;
    if (key in that.serverHash) {
      delete that.serverHash[key];
      result = true;
      that.updateBase();
    }
    return result;
  };

  this.getKeys = function () {
    let keysArray = [];
    for(let drink in that.serverHash) {
      keysArray.push(drink);
    }
    return keysArray;
  };
}