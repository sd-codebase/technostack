// ECMAScript 2017

// String padding
// Object.entries
// Object.values
// async functions

// 1-
// String padding

let str = "5";
str = str.padStart(4,0); // result is 0005

str = "5";
str = str.padEnd(4,0); // result is 5000

// 2-
// Object.entries

let person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};
Object.entries(person); // returns ['firstName', 'John'] ['lastName', 'Doe'] ....


// 3-
// Object.values

person = {
  firstName : "John",
  lastName : "Doe",
  age : 50,
  eyeColor : "blue"
};
Object.values(person); // returns ['John' ,'Deo', 50, 'blue']


// 4-
// async functions

async function myDisplay() {
  let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  await myPromise;
}

myDisplay();