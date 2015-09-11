function parensChecker(string) {
  var parentheses = "[]{}()",
    stack = [],
    i, character, bracePosition;

  for (i = 0; character = string[i]; i++) {
    bracePosition = parentheses.indexOf(character);

    if (bracePosition === -1) {
      continue;
    }

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1); // push next expected brace position
    } else {
      if (stack.pop() !== bracePosition) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(parensChecker("()(((())))")); //=> true
console.log(parensChecker("())))(")); //=> false
console.log(parensChecker(")(")); //=> false


function parensChecker2(string) {
  var chars = string.split('');
  var level = chars.reduce(function(prev, curr) {
    if (prev >= 0) {
      if (curr == '(') prev +=1;
      else prev -=1;
      return prev;
    }
    return prev;
  }, 0);
  return level === 0;
}

console.log(parensChecker2("()(((())))")); //=> true
console.log(parensChecker2("())))(")); //=> false
console.log(parensChecker2(")(")); //=> false
