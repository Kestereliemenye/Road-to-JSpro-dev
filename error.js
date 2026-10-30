function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

console.log(divide(10, 2));


try {
  console.log("Starting");

  throw new Error("Something went wrong");

  console.log("Finished");
} catch (error) {
  console.log("Caught:", error.message);
}


// TRY
// │
// ├── success ─────────┐
// │                    │
// └── error → CATCH ───┤
//                      ▼
//                   FINALLY

// Something goes wrong
//         ↓
//       throw
//         ↓
// normal execution stops
//         ↓
// error travels upward
//         ↓
// nearest appropriate catch
//         ↓
// handle / transform / rethrow