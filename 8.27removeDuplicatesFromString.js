//Write a function named removeDupes which takes a string and removes all duplicate characters in the String.

function removeDupes (string) {
    return string.split('').filter(function(char, index, array){
        return array.indexOf(char) == index;
    }).join('');
}


console.log(removeDupes('AABB')); // 'AB'
console.log(removeDupes('AaAaBbBb')); // 'AaBb'
console.log(removeDupes('cAtCaT')); // 'cAtCaT'


function removeDupes(string) {
    var output = '';
    var array = string.split('');
    used = {};
    for (var i = 0; i < array.length; i++) {
        if (!used[array[i]]) {
            used[array[i]] = true;
            output += array[i]
        }
    }
    return output

}

console.log(removeDupes('AABB')); // 'AB'
console.log(removeDupes('AaAaBbBb')); // 'AaBb'
console.log(removeDupes('cAtCaT')); // 'cAtCaT'


