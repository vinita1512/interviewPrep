// Check if two strings are anagrams.

// function isAnagram(str1, str2) {
//   a = a.toLowerCase();
//   b = b.toLowerCase();

//   if (a.length !== b.length) return false;

//   return a.split("").sort().join("") === b.split("").sort().join("");
// }
// console.log(isAnagram("silent", "liten"));

// using counting frequency - optimal solution o(n)
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length !== str2.length) {
    return false;
  }

  let count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
}
console.log(isAnagram("silent", "listen"));
