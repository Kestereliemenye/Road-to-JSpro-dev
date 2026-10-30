// FUNCTION AS VALUE
// ↓
// Can store/pass functions

// CALLBACK
// ↓
// Function passed to another function

// HIGHER-ORDER FUNCTION
// ↓
// Accepts and/or returns functions

// map()
// ↓
// Transform

// filter()
// ↓
// Select

// reduce()
// ↓
// Accumulate

// PURE FUNCTION
// ↓
// Predictable result,
// no outside modification

// COMPOSITION
// ↓
// Combine small functions
const students = [
  { name: "John", score: 80 },
  { name: "Mary", score: 45 },
  { name: "David", score: 70 },
  { name: "Sarah", score: 30 },
];

const result = students
  .filter((student) => student.score >= 50)
  .map((student) => student.score)
  .reduce((total, score) => total + score, 0);

console.log(result);