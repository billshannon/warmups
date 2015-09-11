// Find the only element in an array that only occurs once. For example in [1,2,2,3,3,5,5,1,6], 6 is the only element that occurs precisely one time.

var numbers = [1,2,2,3,6,2,1,3,5,5,1];

function findUnique(array) {
    var orderedArray = array.slice().sort();
    return orderedArray.reduce(function(previous, current) {
        return previous === current ? previous : current;
    });
}

console.log(findUnique(numbers)); //6