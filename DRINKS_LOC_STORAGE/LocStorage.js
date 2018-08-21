function LocStorage(name) {
  this.locHash = {"data": []};
  let that = this;

  this.addToLocal = function (item, desc) {
    console.log(this.locHash);
    this.locHash.data.push({"header": item, "description": desc});
    localStorage.setItem(name, JSON.stringify(this.locHash));
  };

  this.deleteFromLocal = function (key) {
    localStorage.removeItem(name);
    this.locHash.data.forEach(function (item, index) {
      if (item.header === key) {
        that.locHash.data.splice(index, 1);
      }
    });
    localStorage.setItem(name, JSON.stringify(this.locHash));
  }


}