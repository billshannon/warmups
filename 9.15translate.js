

var isVowel = function(char) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(char.toLowerCase()) !== -1
};

function translate(string) {
    var newString = "";
    for (var i = 0; i < string.length; i++) {
        if (!isVowel(string[i]) && string[i] !== " ") {
            newString += string[i] + "o" + string[i];
        }
        else {
            newString += string[i];
        }
    }
    return newString;
}

console.log(translate('this is fun'));
console.log(translate('In order to understand recursion, one must first understand recursion.'));
console.log(translate('**THIS IS FUN**'));