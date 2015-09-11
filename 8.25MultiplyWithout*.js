// Write a multiply function that multiplies two integers without using
function multiply(int1, int2) {

    if (int2 < 0) {
        return -multiply(int1, -int2)
    }
    else if (int2 == 0) {
        return 0
    }
    else if (int2 == 1) {
        return int1
    }
    else {
        return int1 + multiply(int1, int2 - 1)
    }
}

console.log(multiply(10, 5));
console.log(multiply(-5, 5));
console.log(multiply(5, -5));


function multiply(arg1, arg2){
    return ((Math.pow((arg1 + arg2), 2))/4) - ((Math.pow((arg1 - arg2), 2))/4);
}


function multiply(num1,num2) {
    if (num1 === 0 || num2 === 0) {
        return 0;
    }
    var sum = 0;
    for(var i = 0; i < num2; i++) {
        sum += num1;
    }
    return sum;
};

function multiply (numb, multiplier) {

    if(multiplier == 0) return 0;

    if(multiplier > 0) return (numb + multiply(numb, multiplier -1));

};

function multiplier(num1,num2){
    var output = 1/(1/num1/1/num2)
    console.log(output)
}


