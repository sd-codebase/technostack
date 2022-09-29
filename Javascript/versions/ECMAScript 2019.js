// ECMAScript 2019

// String.trimStart()
// String.trimEnd()
// Object.fromEntries
// Optional catch binding
// Array.flat()
// Array.flatMap()

// 1-
// String.trimStart()
// String.trimEnd()

let text1 = "     Hello World!     ";
let text2 = text1.trimStart(); // "Hello World!     "
let text3 = text1.trimEnd(); // "     Hello World!"

// 2-
// Object.fromEntries

const fruits = [
  ["apples", 300],
  ["pears", 900],
  ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
//{"apples": 300,, "pears": 900, "bananas": 500}

// 3-
// Optional catch Binding

try {
// code
} catch {
// code
}

//Previously it was
try {
// code
} catch (error){
// code
}

// 4-
// Array flat()

const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat(); // [1,2,3,4,5,6]

// 5-
// Array.flatMap()

const myArr1 = [1, 2, 3, 4, 5,6];
const newArr1 = myArr1.flatMap((x) => x * 2); // [2,4,6,8,10,12]
