// Capitalize First Letter of Each Word

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : word))
    .join(" ");
}
console.log(capitalizeWords("helLo world"));
