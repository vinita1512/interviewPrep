// using built-in methods
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// using spread operator
// function reverseString(str) {
//   return [...str].reverse().join("");
// }
// console.log(reverseString("hello"));

// without using built-in methods
// using for loop
function reverseStringWithoutBuiltIn(str) {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}
console.log(reverseStringWithoutBuiltIn("hello"));

// using while loop
// function reverseStringWithoutBuiltIn(str) {
//   let res = "";
//   let i = str.length - 1;
//   while (i >= 0) {
//     res += str[i];
//     i--;
//   }
//   return res;
// }
// console.log(reverseStringWithoutBuiltIn("hello"));
