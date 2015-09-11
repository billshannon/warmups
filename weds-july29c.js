function zip(x,y){
    var greater = (x.length > y.length) ? x.length : y.length;
    var lesser = (x.length > y.length) ? y.length : x.length;
    var output = [];

    for (var i = 0; i < lesser; i ++){
        output.push(x[i]);
        output.push(y[i]);
    }
    for (var i = lesser; i < greater; i++){
        lesser == x.length ? output.push(y[i]): output.push(x[i]);
    }
    console.log(output);
}
zip([1,2,3],[4,5,6,7,8]);