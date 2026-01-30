// Check If String Contains Only Digits

// using regex
function isDigit(str) {
  return /^\d+$/.test(str);
  // / ... / -> it means everythingg between these slashes is a regex pattern
  // ^ -> start of string, Ensures matching begins at the very first character
  //  example: ^123  → matches "123" at start, ^123  → does NOT match "a123" (doesn’t start with 123)
  // \d -> Stands for one digit, 0 through 9.
  //  + -> one or more of the previous element. \d+ means:At least one digit, possibly more
  //  $ -> end of string, Ensures the string ends after the digits. Nothing extra allowed.
  // example: "123"   → matches ^\d+$ (starts and ends with digits), "123a"  → does NOT match ^\d+$ (ends with a letter)

  // /^\d+$/  -> The entire string, from start ^ to end $, must contain only digits, and at least one digit is required
}
console.log(isDigit("vini1234"));

// using for of loop
// function isDigit(str) {
//   let count = 0;
//   for (let char of str) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isDigit("1234"));
