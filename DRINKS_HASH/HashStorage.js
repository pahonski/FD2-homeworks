function HashStorage() {
  this.storage = {};

  this.addValue = function (key, value) {
    this.storage[key] = value;
  }

  this.getValue = function (key) {
    if(key in this.storage) {
      return  this.storage[key];
    } else {
      return undefined;
    }
  }

  this.deleteValue = function (key) {
    if (key in this.storage) {
      delete this.storage[key];
      return true;
    } else {
      return false;
    }
  }

  this.getKeys = function () {
    let keysArray = [];
    for(let drinks in this.storage) {
      keysArray.push(drinks);
    }
    return keysArray;
  }
}