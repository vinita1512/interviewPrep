// with converting a string
function reverseNumber(num) {
  // console.log(typeof num)
  const revNum =
    parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);
  // parseInt - is a not a method, it is a global function. it is used to convert string into number
  // toString - converts a value to string
  // Math.sign() - method that returns the sign of a number, indicating whether it’s positive, negative, or zero. It’s part of the built-in Math object.

  // console.log(typeof revNum)
  return revNum;
}

console.log(reverseNumber(-123));

// without converting to string
// function reverseNumber(num) {
//   let rev = 0;
//   let n = Math.abs(num);
//   while (n > 0) {
//     let digit = n % 10;
//     rev = rev * 10 + digit;
//     n = Math.floor(n / 10);
//   }
//   return rev * Math.sign(num);
// }

// console.log(reverseNumber(1234));
