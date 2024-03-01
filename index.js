// EXAMPLE 1 - Get the first N characters of a String in JavaScript

const str = 'bobbyhadz.com';

// ✅ get the first 2 characters of a string
const first2 = str.slice(0, 2);
console.log(first2); // 👉️ bo

// ✅ get the first 4 characters of a string
const first4 = str.slice(0, 4);
console.log(first4); // 👉️ bobb

// ✅ get the first 5 characters of a string
const first5 = str.slice(0, 5);
console.log(first5); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the first N characters of a String using `String.substring()`

// function getFirstNchars(str, n) {
//   return str.substring(0, n);
// }

// const str = 'bobbyhadz.com';

// const first2 = getFirstNchars(str, 2);
// console.log(first2); // 👉️ bo

// const first4 = getFirstNchars(str, 4);
// console.log(first4); // 👉️ bobb

// const first5 = getFirstNchars(str, 5);
// console.log(first5); // 👉️ bobby

// ------------------------------------------------------------------

// // EXAMPLE 3 - Defining a reusable function

// function getFirstNchars(str, n) {
//   return str.slice(0, n);
// }

// const str = 'bobbyhadz.com';

// const first2 = getFirstNchars(str, 2);
// console.log(first2); // 👉️ bo

// const first4 = getFirstNchars(str, 4);
// console.log(first4); // 👉️ bobb

// const first5 = getFirstNchars(str, 5);
// console.log(first5); // 👉️ bobby
