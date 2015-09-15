var isVowel = function(vow) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(vow.toLowerCase()) !== -1
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