function HashStorage() {
  this.storage = {"data": []};
  let that = this;

  this.addValue = function (key, value) {
    this.storage.data.push({"header": key, "description": value});
    console.log(this.storage);
    // this.storage[key] = value;
  };

  this.getValue = function (key) {
    let result;
    this.storage.data.forEach(function (item) {
      if(item.header === key) {
        result = item.description;
      }
    });
    return result ? result : undefined;
  };

  this.deleteValue = function (key) {
    let result = false;
    this.storage.data.forEach(function (item, index) {
      if (item.header === key) {
        that.storage.data.splice(index, 1);
        result = true;
      }
    });
    return result;
  };

  this.getKeys = function () {
    let keysArray = [];
    this.storage.data.forEach(function (item) {
      keysArray.push(item.header);
    });
    return keysArray;
  };
}