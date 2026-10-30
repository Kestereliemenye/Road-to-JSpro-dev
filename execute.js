// 1. What an execution context is
// 2. Global execution context
// 3. Function execution contexts
// 4. Creation phase vs execution phase
// 5. How variables and functions are prepared
// 6. Hoisting
// 7. What the call stack is
// 8. How functions are pushed onto the stack
// 9. How functions are removed from the stack
// 10. Nested function calls
// 11. Stack overflow / recursion
// 12. How scope and execution contexts relate

// 1. What is an execution context?
// An execution context is the environment JavaScript creates to execute code.
// A useful mental model is:
// An execution context is JavaScript's workspace for the code that is currently being executed.

// in this piece of code

const name = "John";

function greet() {
  const message = "Hello";
  console.log(message);
}

greet();

// javascript create two environemtn to run it
// Global Execution Context
// and
// Function Execution Context
//  a mental picture
// ┌────────────────────────────┐
// │ Global Execution Context   │
// │                            │
// │ name = "John"              │
// │ age = 20                   │
// │ greet = function           │
// └────────────────────────────┘

// so when a function is called js runs a function execution context

// 6. What is the call stack?
// The call stack keeps track of which execution context/function is currently running and where JavaScript needs to return when that function finishes.

// Execution Context
//        ↓
// Environment associated with executing code

// Global Execution Context
//        ↓
// Created for top-level execution

// Function Execution Context
//        ↓
// A new one for each function invocation

// Call Stack
//        ↓
// Tracks active execution

// Function called
//        ↓
// Push

// Function finishes
//        ↓
// Pop

// Stack behavior
//        ↓
// LIFO

// test
function first() {
  console.log("A");

  second();

  console.log("B");
}

function second() {
  console.log("C");

  third();

  console.log("D");
}

function third() {
  console.log("E");
}

console.log("Start");

first();

console.log("End");


// everything together

const x = 10;

function calculate() {
  const y = 20;

  return x + y;
}

console.log(calculate());

// Lexical scope
//      ↓
// calculate can access x


// Execution context
//      ↓
// calling calculate() creates
// a function execution context


// Call stack
//      ↓
// calculate() is pushed onto stack


// return
//      ↓
// returns 30 and finishes calculate()


// Closure
//      ↓
// functions maintain their lexical
// relationship with surrounding scope


// Hoisting / declaration processing
//      ↓
// declarations are processed according
// to their declaration type