// Given two arrays of Numbers, return an array containing elements common to both arrays, for example:

var test1 = [1, 2, 3, 4, 5];
var test2 = [3, 4, 7, 8, 9];
var test3 = [];
var test4 = [1, 1, 1, 1, 1];

function intersection(arr1, arr2) {
    var common = new Array();
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            arr1.shift();
        }
        else if (arr1[0] > arr2[0]) {
            arr2.shift();
        }
        else {
            common.push(arr1.shift());
            arr2.shift();
        }
    }
    return common;
}
//console.log(intersection(test1, test2)); // [3,4]
console.log(intersection(test1, test4)); // [1]
//console.log(intersection(test1, test3)); // []
//console.log(intersection(test2, test3)); // []


