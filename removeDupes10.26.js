function removeDupes (string) {
    return string.split('').filter(function(char, index, array){
        return array.indexOf(char) == index;
    }).join('');
}

console.log(removeDupes('AABB')); // 'AB'
console.log(removeDupes('AaAaBbBb')); // 'AaBb'
console.log(removeDupes('cAtCaT')); // 'cAtCaT'

function insensitiveRemoveDupes(str) {
    var result = '';
    for(var i = 0; i < str.length; i++) {
        if(result.toLowerCase().indexOf(str.charAt(i).toLowerCase()) < 0) {
            result += str.charAt(i);
        }
    }
    return result;
}

console.log(insensitiveRemoveDupes('AABB')); // 'AB'
console.log(insensitiveRemoveDupes('AaAaBbBb')); // 'AB'
console.log(insensitiveRemoveDupes('cAtCaT')); // 'cAt'