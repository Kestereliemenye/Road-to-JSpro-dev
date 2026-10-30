const user = new Map([
  ["name", "John"],
  ["age", 20],
]);

for (const entry of user) {
  console.log(entry);
}

// 2. Iteration vs iterable vs iterator
// These three words are related but different.
// Iteration is the process of going through values one at a time.
// 10 → 20 → 30 → finished

// An iterable is something that knows how to provide an iterator:
// [10, 20, 30]

// An iterator is the object that actually keeps track of the sequence:
// Give me next value
// ↓
// 10

// Give me next value
// ↓
// 20

// Give me next value
// ↓
// 30

// Give me next value
// ↓
// finished

// That's the core distinction.

// MANUAL ITERATOR
const counter = {
  current: 1,

  next() {
    if (this.current <= 3) {
      return {
        value: this.current++,
        done: false,
      };
    }

    return {
      value: undefined,
      done: true,
    };
  },
};
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());