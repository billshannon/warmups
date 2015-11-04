var Spiral = require('../spiral.js');
var SpiralInstance = new Spiral();


describe("Spiral", function () {

    it("works for a 1-element matrix", function () {
        expect(spiral(1,1)).toEqual([1,1]);
        expect(spiral(1,[1,1]).toEqual(1))
    });

    it('works for a 3-element matrix', function (){
        expect(spiral(3,3).toEqual([3,3]))
    })
});



