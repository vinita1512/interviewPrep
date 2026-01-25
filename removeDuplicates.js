// Remove Duplicate Characters
function removeDuplicates(str) {
  let seen = {};
  let result = "";
  for (let char of str) {
    if (!seen[char]) {
      seen[char] = true;
      result += char;
    }
  }
  return result;
}
console.log(removeDuplicates("hello"));
