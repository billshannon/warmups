//function translate(string) {
//    var newString = "";
//    var isVowel = {
//        'a': true,
//        'A': true,
//        'e': true,
//        'E': true,
//        'i': true,
//        'I': true,
//        'o': true,
//        'O': true,
//        'u': true,
//        'U': true,
//        ' ': true
//    };
//    for (var i = 0; i < string.length; i++) {
//        if (!isVowel(string[i][0])) {
//            newString += string[i] + "o" + string[i];
//        }
//        else {
//            newString += string[i];
//        }
//    }
//    return newString;
//}
//
//console.log(translate('this is fun'));