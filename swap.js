// swap two numbers

// using temp vriable

function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}
console.log(swap(1, 2));

// using destructuring

// function swap(a, b) {
//   [a, b] = [b, a];
//   return [a, b];
// }
// console.log(swap(1, 2));
