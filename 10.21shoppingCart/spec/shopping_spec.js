var Shopping = require("../src/shopping");
var Item = require("../src/items");

describe("Shopping", function(){

    it("Starts out empty", function(){
        var shop = new Shopping();
        expect(shop.empty).toEqual(true);
    })

    it("item has price and name", function(){
        var item = new Item({price: 3, name: 'hotdog'})
        expect(item.price).toEqual(3);
        expect(item.name).toEqual("hotdog");
    })

    it("add item to shopping cart", function(){
        var item = new Item({price: 5, name: "taco"})
        var shopping = new Shopping();
        shopping.add(item)
        var item2 = new Item(5, "taco")
        shopping.add(item2)
        expect(shopping.items).toEqual([item,item2])
    })

    //it("remove item from shopping cart", function(){
    //    var item = new Item(5, "taco")
    //    var shopping = new Shopping();
    //    shopping.add(item)
    //    var item2 = new Item(6, "burrito")
    //    shopping.add(item2)
    //    expect(shopping.items).toEqual([item,item2])
    //    shopping.remove("burrito")
    //    expect(shopping.items).toEqual([item])
    //    console.log(shopping.items);
    //})
    //
    //it("total price shopping cart", function(){
    //    var item = new Item(5, "taco")
    //    var shopping = new Shopping();
    //    shopping.add(item)
    //    var item2 = new Item(6, "burrito")
    //    shopping.add(item2)
    //    expect(shopping.total).toEqual(11)
    //})
    //
    //it("discount shopping cart", function(){
    //    var item = new Item(5, "taco")
    //    var shopping = new Shopping();
    //    shopping.add(item)
    //    var item2 = new Item(10, "burrito")
    //    shopping.add(item2)
    //    expect(shopping.total).toEqual(15)
    //    shopping.discount(20)
    //    expect(shopping.total).toEqual(12)
    //})

})