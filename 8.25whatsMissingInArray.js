// You are given an array with integers between 1 and 1,000,000, but one integer is missing. Write a function that determines the missing value.

var hugeArray = [];

function fillHugeArray(){
    for (var i = 1; i <= 1000000; i++){
        hugeArray.push(i);
    }
    hugeArray.sort();
    randomIndex = Math.floor(Math.random()*1000000 + 1);

    console.log("This is the randomly removed integer: " + hugeArray.splice(randomIndex, 1));
}