var string = "Galvanize";

function modifyString() {

    string = Array.prototype.reverse.call(string);
    console.log(string);

    string = Array.prototype.slice.call(string).reverse().join("");
    console.log(string);
}

modifyString();
console.log(string);