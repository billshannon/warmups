function convertToGradeObjectForIn(arr){
    var output = [];
    var letterGrades = {
        "A": 90,
        "B": 80,
        "C": 70,
        "D": 60,
        "F": 0
    }
    for (prop in letterGrades){
        for (var i = 0; i < arr.length; i++){
            if (arr[i] >= letterGrades[prop]){
                output.push(prop)
            }
        }
    }
    return output;
}

console.log(convertToGradeObjectForIn([ 68, 74, 99, 45, 83, 95 ]));