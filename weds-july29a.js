function zip(arr1, arr2){
    output =[];
    for (var i = 0;i<=arguments.length; i++){
        output.push(arr1[i]);
        output.push(arr2[i]);
    }
    console.log(output.join(','));
}

zip([1,2,3], [4,5,6])