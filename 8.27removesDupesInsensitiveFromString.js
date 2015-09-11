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