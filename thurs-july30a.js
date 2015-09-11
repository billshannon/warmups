function theBest() {


    function theWorst() {
        count -= 4;
    }

    var count = 10;

    function reallyTheBest() {
        count += 25;
    }

    reallyTheBest();
    reallyTheBest();
    reallyTheBest();
    theWorst();
    theWorst();
    reallyTheBest();

    return count;
}

console.log(theBest());
console.log(theBest());
console.log(theBest());
console.log(theBest());