function LocStorage(name) {
  let that = this;
  this.id = '';
  console.log(this.locHash = JSON.parse(localStorage.getItem(name)));
  if(localStorage.getItem(name)) {
    this.locHash = JSON.parse(localStorage.getItem(name));

  } else {
    this.locHash = {"id": this.id, "data": []};
  }

  this.getName = function () {
    return name;
  };

  this.addValue = function (key, value) {
    this.locHash.data.push({"header": key, "description": value});
    this.locHash.id = this.id;
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