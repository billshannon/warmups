// closure - will be on every JavaScript interview

function addN(n) {
    return function(x) {
        return n + x;
    }
};

var addSix = addN(6);
var addTwo = addN(2);

console.log(addSix(10));
console.log(addSix(100));
console.log(addSix(100) + addTwo(10));
