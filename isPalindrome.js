// using built in methods
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// console.log(isPalindrome("madam"));

// Checking the String from Last
// function isPalindrome(str) {
//   let reverse = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return str === reverse;
// }

// console.log(isPalindrome("madam"));

// using for loop Comparing letters from both ends
// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] != str[str.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(isPalindrome("madam"));

// using while loop
// function isPalindrome(str) {
//   let i = 0;
//   while (i < str.length / 2) {
//     if (str[i] != str[str.length - 1 - i]) {
//       return false;
//     }
//     return true;
//     i++;
//   }
// }

// console.log(isPalindrome("madam"));
