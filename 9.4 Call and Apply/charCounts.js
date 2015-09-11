function reCharCounts(string,out){
    if(string.length == 0){
        return out
    }
    out[string[0]] == undefined ? out[string[0]] = 1 : out[string[0]] = out[string[0]] + 1
    return reCharCounts(string.slice(1), out)
}
console.log(reCharCounts("This is a string!!!",{}));




function reCharCounts2(string){
    function go(string, out){
        if(string.length == 0){
            return out
        }

        out[string[0]] == undefined ? out[string[0]] = 1 : out[string[0]] = out[string[0]] + 1
        return go(string.slice(1), out)
    }
    return go(string,{})
}
console.log(reCharCounts2("This is a string!!"));




function charCounts3(str) {
    return str.split('').reduce(function(obj, val){
        obj[val] = obj[val] + 1 || 1;
        return obj;
    }, {})
}
console.log(charCounts3("This is a string!!"));