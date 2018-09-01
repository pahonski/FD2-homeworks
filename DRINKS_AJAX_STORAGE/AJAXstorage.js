'use strict';

function AjaxStorage() {
  this.storageHash = {"data": []};
  this.serverHash = {};
  this.server = "https://fe.it-academy.by/AjaxStringStorage2.php";
  this.stringName = "KUZNIATSOU_DRINKS_AJAX_STORAGE";
  this.serverLoad = '';
  this.password = '';

  this.readFromServer();

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

  this.addAjaxValue = function (key, value) {
    that.storageHash.data.push({"header": key, "description": value});
    that.password = Math.random();
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
      if(that.serverLoad === true && that.storageHash.data.length > 0) {
        that.serverHash.data[that.serverHash.data.length] = that.storageHash.data[that.storageHash.data.length - 1];
      } else {
        that.serverHash = that.storageHash;
      }
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
    that.serverHash.data.forEach(function (item) {
      if(item.header === key) {
        result = item.description;
      }
    });
    return result ? result : undefined;
  };

  this.deleteValue = function (key) {
    let result = false;
    that.serverHash.data.forEach(function (item, index) {
      if (item.header === key) {
        that.serverHash.data.splice(index, 1);
        result = true;
      }
    });
    that.updateBase();
    return result;
  };

  this.getKeys = function () {
    let keysArray = [];
    this.serverHash.data.forEach(function (item) {
      keysArray.push(item.header);
    });
    return keysArray;
  };
}