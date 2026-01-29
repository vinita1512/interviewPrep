// Count  and print Vowels in a String
function countVowels(str) {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let count = 0;
  let result = [];
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
      result.push(char);
    }
  }
  return { count: count, vowels: result };
}
console.log(countVowels("hello"));
