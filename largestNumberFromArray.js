// using spread operator
function largestNumberFromArray(arr) {
  return Math.max(...arr);
  // used the spread operator to expand the array into individual elements because
  // Math.max() does not accept an array directly.
  // It expects separate arguments.
  // So spreading converts the array into arguments,
  // and Math.max() returns the maximum value
}
console.log(largestNumberFromArray([4, 7, 9, 6]));

// using loop
// function largestNumberFromArray(arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(largestNumberFromArray([4, 7, 9, 6]));

// using reduce method
// function largestNumberFromArray(arr) {
//   return arr.reduce((max, curr) => (curr > max ? curr : max));
// }
// console.log(largestNumberFromArray([4, 7, 9, 6]));
