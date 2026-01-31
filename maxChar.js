// Find Most Repeated Character
function maxChar(str) {
  str = str.toLowerCase();
  let count = {};
  let max = 0;
  let result = "";
  for (let char of str) {
    if (char === " ") {
      continue;
    }
    count[char] = (count[char] || 0) + 1;
    if (count[char] > max) {
      max = count[char];
      result = char;
    }
  }
  return result;
}
console.log(maxChar("he l l o"));
