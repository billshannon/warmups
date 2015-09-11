function multiplyString (string) {
    return string.split('*').reduce(function(prev,curr) {
        return prev * Number(curr)
    })
}

console.log(multiplyString("10*20*30"));  //=> 6000