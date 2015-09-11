// Write a function named isPalindrome that takes a string and determines if it is a palindrome.
function isPalidrome(string) {
        return string == string.split('').reverse().join('');
}

console.log(isPalidrome("A Santa Lived As a Devil At NASA"));
console.log(isPalidrome("a santa lived as a devil at nasa"));

