var Shopping = require("../src/shopping");
var Item = require("../src/items");

describe("Shopping", function(){
    var shopping, item, item2, item3;

    beforeEach(function() {
        shopping = new Shopping;
        item = new Item(5, 'taco');
        item2 = new Item(6, 'burrito');
        item3 = new Item(7, 'quesadilla');
    });

    it("Starts out empty", function(){
        expect(shopping.empty).toEqual(true);
    })

    it("item has price and name", function(){
        expect(item.price).toEqual(5);
        expect(item.name).toEqual("taco");
    })

    it("add item to shopping cart", function(){
        shopping.add(item)
        shopping.add(item2)
        expect(shopping.items).toEqual([item,item2])
    })

    it("remove item from shopping cart", function(){
        shopping.add(item)
        shopping.add(item2)
        expect(shopping.items).toEqual([item,item2])
        shopping.remove("taco")
        expect(shopping.items).toEqual([item2])
        shopping.add(item3)
        shopping.remove("taco")
        expect(shopping.items).toEqual([item2, item3])
    })

    it("cart can return total", function(){
        shopping.add(item)
        shopping.add(item2)
        expect(shopping.total).toEqual(11)
        shopping.remove("burrito")
        expect(shopping.total).toEqual(5)
    })

    it("discount shopping cart", function(){
        shopping.add(item)
        shopping.add(item2)
        expect(shopping.total).toEqual(11)
        shopping.discount(20)
        expect(shopping.total).toEqual(8.8)
    })

});