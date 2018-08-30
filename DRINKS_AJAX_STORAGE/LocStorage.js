function LocStorage(name) {
  let that = this;
  this.id = randomDiap(999999999999, 1);
  this.locHash = {"id": this.id, "data": []};

  if(localStorage.getItem(name)) {
    this.locHash = JSON.parse(localStorage.getItem(name));
  }

  function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
  }

  this.getName = function () {
    return name;
  };

  this.addValue = function (key, value) {
    this.locHash.data.push({"header": key, "description": value});
    console.log(this.id);
    this.locHash.id = this.id;
    console.log('pered dobavleniem', this.locHash);
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