// 1-

// The let keyword
// The const keyword
// Arrow Functions
// For/of
// Map Objects
// Set Objects
// Classes
// Promises
// Symbol
// Default Parameters
// Function Rest Parameter
// String.includes()
// String.startsWith()
// String.endsWith()
// Array.from()
// Array keys()
// Array find()
// Array findIndex()
// New Math Methods
// New Number Properties
// New Number Methods
// New Global Methods
// Object entries
// JavaScript Modules
// Array and Object destructuring
// Template string to wrap expressions in raw string
// concise properties and methods in object








// 2-

var x = 10;
// Here x is 10
{
  let x = 2;
  // Here x is 2
}
// Here x is 10






















// 3-

var x = 10;
// Here x is 10
{
  const x = 2;
  // Here x is 2
}
// Here x is 10
























// 4-

// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

























// 5-
for (let item of list) {
  console.log(item);
}































// 6-
// JavaScript Maps
const map =new Map()
map.set('key', value);
map.get('key');






























// 7-
// JavaScript Sets
const letters = new Set();
letters.add("a");
letters.add("b");





























// 8-
// JavaScript Classes
class ClassName {
  constructor() { 
    //...
  }
}

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car("Ford", 2014);




















// 9-
// Promise Object
let myPromise = new Promise((resolve, reject) => {
  resolve() // when successful
  reject();  // when error
});

myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);























// 10-
// Default Parameter
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15


























// 11-
// Rest Parameter
function sum(...params) {
  let sum = 0;
  for (let param of params) sum += param;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
























// 12-
// String methods
let text = "Hello world, welcome to the universe.";
text.includes("world")    // Returns true
text.startsWith("Hello")   // Returns true
text.endsWith("universe.")    // Returns true





























// 13-
// Array Methods
Array.from("ABCDEFG")   // Returns [A,B,C,D,E,F,G]

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.keys()); //logs 0,1,2,3

const numbers = [4, 9, 16, 25, 29];
console.log(numbers.find(num => num > 18)); // returns 25
console.log(numbers.findIndex(num => num > 18)); // returns 3























// 14-
// New Number Properties

Number.EPSILON
Number.MIN_SAFE_INTEGER
Number.MAX_SAFE_INTEGER

Number.isInteger() //returns true if given number is integer
Number.isSafeInteger() //returns true if given number is in range from Number.MIN_SAFE_INTEGER to Number.MAX_SAFE_INTEGER
























// 15-
// New Global Methods
isFinite(10/0);       // returns false
isFinite(10/1);       // returns true
isNaN("Hello");       // returns true




























// 16-
// Object.entries()
const fruitsList = ["Banana", "Orange", "Apple", "Mango"];
const f = fruitsList.entries();

for (let x of f) {
  console.log(x); // logs [0, 'Banana'] [1, 'Orange'] [2, 'Apple']
}

























// 17-
// Modules
import { name, age } from "./person.js"; // named exports
import message from "./message.js"; // defailt exports

// person.js
const name= "My Name";
const age = 30;
export {name, age};

// message.js
export default "Default export message";


// 18-
// Array and Object destructuring

//array
const [a,b] =[10,20] // a= 10, b = 20;
//object
const {fname, lname: lastName} = {fname: 'john', lname: 'deo'} // fname = 'john', lastName = 'deo';


// 19-
// Template String

const place = 'the heaven';
const str = `Hello, welcome to ${place}`; // Hello, welcome to the heaven


// 20-
// concise properties and methods in object

const fName = 'John';
const ob = {
  fName,  // fName is concise property here
  getName() { // getName is concise method here
    return this.fname;
  }
}; 