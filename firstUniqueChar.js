// Find First Non-Repeating Character
function firstUniqueChar(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str) {
    if (count[char] === 1) {
      return char;
    }
  }
  return "no character is non-repeating";
}
console.log(firstUniqueChar("aabccd"));
