// ECMAScript 2020

// BigInt
// The Nullish Coalescing Operator (??)
// The Optional Chaining Operator (?.)
// Promise.allSettled()

// 1-
// BigInt
let x = 123456789012345;
let y = 1234567890123456; // too big

// Valid defination of bigints
let a = 1234567890123456789012345n;
let b = BigInt(1234567890123456789012345)


// 2-
// Nullish Coalescing Operator (??)

let text1 = null;
let text2 = "missing";
let result = text1 ?? text2; // return "missing" as text1 is null


// 3-
// The Optional Chaining Operator (?.)

// Create an object:
const car = {type:"Fiat", model:"500", color:"white"};
// Ask for car name:
car?.name; // return undefines


// 4-
// Promise.allSettled()

Promise.allSettled([p1,p2,p3]).then(handler);

