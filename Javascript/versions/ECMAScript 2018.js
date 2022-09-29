// ECMAScript 2018

// Promise Finally
// Object Rest Properties

// 1-
// Promise.finally

let myPromise = new Promise();

myPromise.then();
myPromise.catch();
myPromise.finally();

// 2-
// Object Rest Properties

let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
x; // 1
y; // 2
z; // { a: 3, b: 4 }