'use strict';

function AjaxStorage() {
  this.server = "https://fe.it-academy.by/AjaxStringStorage2.php";
  this.stringName = "KUZNIATSOU_DRINKS_AJAX_STORAGE";
  this.password = null;
  this.userData = null;
  this.dataBase = {};
  this.emptyId = null;

  let that = this;


  this.getEmptyId = function () {
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'READ', n: this.stringName
      },
      success: function (callresult) {
        that.emptyId = JSON.parse(callresult.result).length;
        that.showId(that.emptyId);
        console.log(that.showId(that.emptyId));
        },
      error: that.ajaxErr
    });

  };

  this.showId = function (id) {
    return id;
  };

  this.addNewUser = function (data) {
    console.log($);
    let that = this;
    this.userData = data;
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

    if(callresult.error != undefined) {
      alert(callresult.error);
    } else if (callresult.result != "") {
      this.emptyId = JSON.parse(callresult.result).length;
      console.log(callresult.result);
    } else if (callresult.result === "") {
      this.emptyId = 0;
      that.createBase(that.emptyId, that.userData);
    }
  };

  this.ajaxErr = function (jqXHR,statusStr,errorStr) {
    alert(statusStr+' '+errorStr);
  };

  this.createBase = function (id, data) {
    let that = this;
    let base = [];
    let user = {
      id: id,
      data: data
    };
    base.push(user);
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'INSERT', n: this.stringName, v: JSON.stringify(base)
      },
      success: that.insertReady,
      error: that.ajaxErr
    })
  };

  this.insertReady = function (callresult) {
    console.log(callresult)
    // if(callresult == 'OK') {
    //   alert('Успешно добавлено!')
    // }
    // if(callresult.error) {
    //   alert(callresult.error);
    // }
  };

  this.changeBase = function () {
    this.password = Math.random();
    $.ajax({
      url: this.server,
      type: 'POST',
      cache: false,
      dataType: 'json',
      data: {
        f: 'LOCKGET', n: this.stringName, p: this.password
      },
      success: this.changeReady.bind(this),
      error: this.ajaxErr
    })
  };

  this.changeReady = function (callresult) {
    let that = this;
    if ( callresult.error!=undefined )
      alert(callresult.error);
    else {
      this.dataBase = JSON.stringify(callresult.result);
      $.ajax({
        url: this.server,
        type: 'POST',
        cache: false,
        dataType: 'json',
        data: {
          f: 'UPDATE', n: this.stringName, v: that.dataBase, p: that.password
        },
        success: this.updateReady,
        error: this.ajaxErr
      })
      }
  };

  this.clearError = function () {

  };

  this.updateReady = function (callresult) {
    if ( callresult.error!=undefined )
      alert(callresult.error);
  }
}