// 1. What is the decimal value of 1233215 in base 7?

// 159605

// 2. Write a function named rotateEvenIndices that take a String argument, here are sample tests to illustrate the behavior:

var string = 'foobar'; //roboor

//var rotatedOnce = rotateEvenIndices(string, 2);
//console.log(rotatedOnce); // 'aofbor'
//
//var rotatedTwice = rotateEvenIndices(rotatedOnce);
//console.log(rotatedTwice); // 'ooabfr'

//var backToOriginal = rotateEvenIndices(rotatedTwice);
//console.log(string === backToOriginal); // foobar true


function greatestProductOfPairs(array) {
    var numbers = array.sort(function (a,b) {
        return b-a;
    });

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            product = numbers[i] * numbers[j];
            return product;
        }
    }
}

console.log(greatestProductOfPairs([2, 3, 4, -5, 92, 100])); // 9200
console.log(greatestProductOfPairs([-2, 3, -4, -5, -92, -100])); // 9200