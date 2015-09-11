// 1. Explain what recursion is to a beginner developer.
//      Recursion is a function that calls itself until it doesn't

// 2. Define a recursive function named power which takes two arguments; a number and an exponent to raise that number to.

var power = function (baseNum, exponent) {
    if (exponent === 0) return 1;
    return baseNum * power(baseNum, exponent - 1);
};
console.log(power(2, 3)); //=> 8
console.log(power(4, 2));//=> 16


// 3. Define a recursive function named palindrome that returns true if a string is a palindrome and false otherwise.

function palidrome(string) {
    return string === string.split('').reverse().join('');
}

console.log(palidrome("bob"));
console.log(palidrome("tom"));
console.log(palidrome("taco cat taco cat"));
console.log(palidrome("tacocat tacocat"));