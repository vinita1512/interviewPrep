// Find Longest Word in a String
function longestWord(str) {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest
}
console.log(longestWord("I love JavaScript"));

// without using built in method
// function longestWord(str) {
//   let longest = "";
//   let currentWord = "";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (char != " ") {
//       currentWord += char;
//     } else {
//       if (currentWord.length > longest.length) {
//         longest = currentWord;
//       }
//       currentWord = "";
//     }
//   }

//   if (currentWord.length > longest.length) {
//     longest = currentWord;
//   }

//   return longest;
// }
// console.log(longestWord("I love JavaScript"));
