// Read about the Collatz Conjecture and implement a recursive solution that
// displays the Collatz Sequence for a given positive integer, n:
// https://en.wikipedia.org/wiki/Collatz_conjecture

function collatzSequence(num) {
  var output = '';

  function go(num) {
    if (num === 1) return 1;
    output += num + '->';
    return num % 2 === 0 ? go(num / 2) : go(num * 3 + 1);
  }
  go(num);
  return output.slice(0, -2);
}
console.log(collatzSequence(13));
console.log(collatzSequence(252));


function coll(num) {
  var newNum = num;

  if (newNum !== 1 && newNum % 2 !== 0) {
    return newNum + " -> " + coll(3 * newNum + 1)
  }
  if (newNum !== 1 && newNum % 2 === 0) {
    return newNum + " -> " + coll(newNum / 2)
  }
  return newNum
}

console.log(coll(25232));

function collatzSequence(number) {
  var param;
  if (number == 1) {
    return 1;
  }
  number % 2 == 0 ? param = number / 2 : param = (number * 3) + 1;
  return number + ' -> ' + collatzSequence(param);
}

function collatz(n) {
  if (n === 1) return 1;
  return n + " -> " + collatz(n % 2 === 0 ? n / 2 : 3 * n + 1)
}
