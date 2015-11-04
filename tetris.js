function tetrominos(count) {
    var seq = '', bag = [];
    while (count-- > 0) {
        if (bag.length == 0) bag = 'OISZLJT'.split('');
        seq += bag.splice(Math.random() * bag.length, 1);
    }
    return seq;
}
console.log(tetrominos(50))
console.log(tetrominos(50))
console.log(tetrominos(50))