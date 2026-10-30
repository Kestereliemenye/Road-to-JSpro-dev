// // LEARNING LEXICL A scopes

// // example 1

// const color = "blue";

// function showColor() {
//   console.log(color);
// }

// showColor();

// // example 2
// function test() {
//   const animal = "dog";

//   if (true) {
//     const sound = "woof";

//     console.log(animal);
//   }

//   console.log(sound);
// }

// // test();

// // example 3
// const score = 100;

// function game() {
//   const score = 50;

//   function showScore() {
//     console.log(score);
//   }

//   showScore();
// }

// game();
// // example 4
// const food = "rice";

// function showFood() {
//   console.log(food);
// }

// function dinner() {
//   const food = "pizza";

//   showFood();
// }

// dinner();

// CLOSURES
// function createCounter() {
//   let count = 0;

//   return function () {
//     count++;

//     return count;
//   };
// }

// const counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// What you need to know about closures
// At this stage, I want these ideas to become automatic:
// 1. Functions remember their lexical environment.

// 2. A function can access variables from where it was defined.

// 3. That access can remain after the outer function has returned.

// 4. Different executions of an outer function can create separate closures.

// 5. Closures are useful for private state, callbacks, function factories and configuration

// CLOSURE EXAMPLE

// function outer() {
//   const x = 10;

//   return function () {
//     console.log(x);
//   };
// }

// const fn = outer();

// fn();
// function counter() {
//   let number = 0;

//   return function () {
//     number += 2;

//     return number;
//   };
// }

// const count = counter();

// console.log(count());
// console.log(count());
// console.log(count());

// function counter() {
//   let number = 0;

//   return function () {
//     number++;
//     return number;
//   };
// }

// const a = counter();
// const b = counter();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(a());
// console.log(b());

function outer(x) {
  return function inner(y) {
    return x + y;
  };
}

const addFive = outer(5); 
// this gives us
// addFive = function inner(y) {
//     return 5 + y
// }  -------------------------
                              
const addTen = outer(10);     

console.log(addFive(3)); // so when this runs
// it becomes
// addifve = function inner(3) {
//     return 5 + 3
// }
console.log(addTen(3));
