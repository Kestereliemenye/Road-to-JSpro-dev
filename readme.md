# LEXICAL SCOPE
 A SCOPE:
 Scope determines where a variable can be accessed in your code.

 GLOBAL SCOPE
│
│ const age = 20
│
├── FUNCTION SCOPE
│   │
│   │ const name = "David"
│   │
│   └── can access:
│       ✓ name
│       ✓ age
│
└── outside function:
    ✓ age
    ✗ name
A lexical scope:
Lexical scope means a function's access to variables is determined by where that function is written in the source code.Not where you eventually call it.

NESTED SCOPE 
function outer() {
  const message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
inner
  ↓
Can access inner variables
  ↓
Can access outer variables
  ↓
Can access global variables

LET CONST AND VAR

var
→ function scoped

let
→ block scoped

const
→ block scoped

# CLOSURE AND LEXICAL SCOPE
LEXICAL SCOPE
     │
     │ determines what variables
     │ the function can access
     ▼
CLOSURE
     │
     │ preserves access to its
     │ lexical environment
     ▼
Function can use those variables later