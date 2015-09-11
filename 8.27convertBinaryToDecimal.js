//Write a function called toDecimal which takes a binary number and converts it to decimal

function toDecimal(binary) {
    var decimal = 0;
    var revBinaryList = String(binary).split('').reverse();
    revBinaryList.forEach(function(bit, index) {
        decimal += Number(bit) * Math.pow(2, index);
    });
    return decimal;
}

console.log(toDecimal(0)); // 0
console.log(toDecimal(1)); // 1
console.log(toDecimal(11)); // 3
console.log(toDecimal(1000)); // 8
console.log(toDecimal(1100)); // 12

function toDecimal2(binary, base){
    var output = 0;
    for ( var i=binary.length-1, j=1 ;i>-1; i--, j*=base ){
        output += binary[i] * j;
    }
    return output;
}
console.log(toDecimal2(2301, 4)); // 12