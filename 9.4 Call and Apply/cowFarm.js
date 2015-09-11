function CowFarm(names) {
    this.mooInOrder = function() {
        var result = names.map(function(name) {
            return name.moo();
        });
        return result.join('\n');
    }
}

var farm = new CowFarm([bessy, mooey, chewy]);

console.log(farm.mooInOrder());