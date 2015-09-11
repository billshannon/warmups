// Write a function called strip which removes all leading and trailing whitespace from a string, but preserves whitespace not found at the beginning or end of the string.

function strip(string) {
    var striped = string.slice(0);
    while (striped.charAt(0) == (" ")) {
        striped = striped.substring(1);
    }
    while (striped.charAt(striped.length - 1) == " ") {
        striped = striped.substring(0, striped.length - 1);
    }
    return striped;
}

console.log(strip("  Leading and trailing whitespace is gone, but the middle          is preserved         "));