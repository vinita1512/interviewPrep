// Check if one string contains another.

// function containsSubstring(str, subStr) {
//   return str.includes(subStr);
// }
// console.log(containsSubstring("hello world", "hello"));

// without usinng built-in method
// function containsSubstring(str, subStr) {
//   // empty substring
//   if (subStr.length === 0) return true;
//   //   If substring is longer than text, it cannot exist
//   if (subStr.length > str.length) return false;
//   //   Outer loop: try every valid starting position in text
//   for (let i = 0; i <= str.length - subStr.length; i++) {
//     let match = true;
//     // Inner loop: check each character of the substring
//     for (let j = 0; j < subStr.length; j++) {
//       if (str[i + j] != subStr[j]) {
//         match = false;
//         break;
//       }
//     }
//     // If full substring matched at this position, return true
//     if (match) {
//       return true;
//     }
//   }
//   return false; //substring not found anywhere in text
// }
// console.log(containsSubstring("hello world", "hello"));
