function LocStorage(name) {
  this.locHash = {"data": []};
  if(localStorage.getItem(name)) {
    this.locHash = JSON.parse(localStorage.getItem(name));
  }

  let that = this;

  this.addValue = function (key, value) {
    this.locHash.data.push({"header": key, "description": value});
    localStorage.setItem(name, JSON.stringify(this.locHash));
    console.log(this.locHash);
    // this.storage[key] = value;
  };

  this.getValue = function (key) {
    let result;
    this.locHash.data.forEach(function (item) {
      if(item.header === key) {
        result = item.description;
      }
    });
    return result ? result : undefined;
  };

  this.deleteValue = function (key) {
    let result = false;
    this.locHash.data.forEach(function (item, index) {
      if (item.header === key) {
        that.locHash.data.splice(index, 1);
        result = true;
      }
    });
    localStorage.setItem(name, JSON.stringify(this.locHash));
    return result;
  };

  this.getKeys = function () {
    let keysArray = [];
    this.locHash.data.forEach(function (item) {
      keysArray.push(item.header);
    });
    return keysArray;
  };
}