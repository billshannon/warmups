// Write a function that will capitalize not only the first word of the fish in the array, but the second as well.

var fish = ["rainbow trout", "smallmouth bass", "white bass", "channel catfish"];

function capitalizeFish(fishes){
    return fishes.map(function(fish){
        return fish.trim().split('').map(function(letter, i){
            var capitalizeNext = fish[fish.indexOf(letter, i) - 1] === ' ' || fish[fish.indexOf(letter, i) - 1] === undefined;
            return capitalizeNext ? letter.toUpperCase() : letter;
        }).join('')
    })
}

console.log(capitalizeFish(fish));//-> ["Rainbow Trout", "Smallmouth Bass", "White Bass", "Channel Catfish"]