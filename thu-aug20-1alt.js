function addString (string) {
    return string.split('+').reduce(function(prev,curr) {
        return prev + Number(curr)
    }, 0)
}

console.log(addString("10+20+30"));  //=> 60