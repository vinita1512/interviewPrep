// Count frequency of each character.

// function charCount(str) {
//   let obj = {};

//   // converting string into lowercase bcz:
//   // if str = "abcABc" then wil get { a: 1, b: 1, c: 2, A: 1, B: 1 }
//   str = str.toLowerCase();
//   for (let char of str) {
//     // to skip spaces, space is not equal to empty string
//     if (char === " ") {
//       continue;
//     }

//     obj[char] = (obj[char] || 0) + 1;
//   }
//   return obj;
// }
// console.log(charCount("abc  ABc"));

// using for loop instead of for-of loop
// function charCount(str) {
//   let obj = {};
//   str = str.toLowerCase(); // convert all letters to lowercase

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char === " ") continue;

//     obj[char] = (obj[char] || 0) + 1;
//   }

//   return obj;
// }

// console.log(charCount("abc  ABc"));

// another solution
function charCount(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    str = str.toLowerCase();
    // Skip spaces
    if (char === " ") continue;
    // Count frequency
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }

  return obj;
}
console.log(charCount("Hello World"));
