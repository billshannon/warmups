// Write a function named addString that takes a string of arithmetic involving addition and returns the proper value. For example addString("10+20+30"); would return 60 (as a Number).

function addString(string) {
    stringSpl = string.split('+');
    var sum = 0;
    for (var i = 0; i < stringSpl.length; i++) {
        sum += parseInt(stringSpl[i], 10);
    }
    return sum;
}

var sumNumber  = addString("10+20+30");
console.log(sumNumber);
console.log(typeof (sumNumber));