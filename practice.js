

function dupes (array){
    var indices = [];

    var element = '';
    var idx = array.indexOf(element);
    while (idx != -1) {
        indices.push(idx);
        idx = array.indexOf(element, idx + 1);
    }

}

var idx = array.indexOf(element);
while (idx != -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]

var array = ['a', 'b', 'a', 'c', 'a', 'd'];