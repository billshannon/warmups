/* 3. What is a closure? Provide an example.
 Closure is an inner function that has access to the outer functions variables and scope. */

function date(month, day, year) {
    var todayIs = "Today's date is ";

    function fullDate() {
        return todayIs + month + " " + day + ", " + year;
    }

    return fullDate()
}

console.log(date("August", "19", "2015"));