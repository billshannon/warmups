function Shopping () {
    this.empty = true
    this.items = []
    this.total = 0

}

Shopping.prototype.add = function (item) {
    this.items.push(item)
    this.total += item.price
}

Shopping.prototype.remove = function (itemName) {
    for (var i = 0; i < this.items.length; i++) {
        if (itemName === this.items[i].name) {
            this.total -= this.items[i].price
            this.items.splice(i,1);
        }
    }
};
// To calculate the percentage increase: First: work out the difference (increase) between the two numbers you are comparing. Then: divide the increase by the original number and multiply the answer by 100

Shopping.prototype.discount = function (discountPercentage) {
    this.total = (this.total / 100) * (100 - discountPercentage)
};

module.exports = Shopping;