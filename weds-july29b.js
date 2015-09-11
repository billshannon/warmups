function zipArray(first, second){
    var result = [];
    if (first.length === second.length){
        for (var i = 0; i < first.length; i++){
            result.push(first[i], second[i]);
        }
    } else if (first.length < second.length){
        for (var j = 0; j < first.length; j++){
            result.push(first[j], second[j]);
        }
        for (var k = first.length; k < second.length; k++){
            result.push(second[k]);
        }
    } else if (first.length > second.length){
        for (var j = 0; j < second.length; j++){
            result.push(first[j], second[j]);
        }
        for (var k = second.length; k < first.length; k++){
            result.push(first[k]);
        }
    }
    //result = result.join(""); //if you want a string, uncomment this
    return result;  //otherwise, array
}

console.log(zipArray([1,2,3],[4,5,6])); //[1,4,2,5,3,6]
console.log(zipArray([1,2,3],[4,5,6,7,8])) //[1,4,2,5,3,6,7,8]
console.log(zipArray([1,2,3,4,8,9],[4,5,6])) //[1,4,2,5,3,6,8,9]