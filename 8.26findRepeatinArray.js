function find_duplicates(array) {

    var track = {};
    var duplicates = [];

    array.forEach(function (item) {
        !track[item] ? track[item] = true : duplicates.push(item);
    });

    return duplicates;
}

console.log(find_duplicates([4,5,1,1,2,3,4,4,7,5,2,6,10,9]));