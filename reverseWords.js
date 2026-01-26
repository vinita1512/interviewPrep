// Reverse Words in a Sentence

function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
console.log(reverseWords("hello world"));

// without using built - in method
// function reverseWords(sentence) {
//   let result = "";
//   let word = "";
//   for (let i = sentence.length - 1; i >= 0; i--) {
//     if (sentence[i] !== " ") {
//       word = sentence[i] + word;
//     } else {
//       result += word + " ";
//       word = "";
//     }
//   }
//   result += word;
//   return result;
// }
// console.log(reverseWords("hello world"));
