// using if else

function checkNumber(n) {
  if (n === 0) {
    return n + " is zero";
  } else if (n > 0) {
    return n + " is positive";
  } else {
    return n + " is negative";
  }
}
console.log(checkNumber(1));

// using ternary operator
// function checkNumber(n) {
//   return n > 0
//     ? `${n} is positive`
//     : n < 0
//       ? `${n} is negative`
//       : `${n} is zero`;
// }
// console.log(checkNumber(1));
