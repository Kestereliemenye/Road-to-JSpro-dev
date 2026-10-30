// What is this?
// this is a special value available inside functions.
// It lets a function refer to the context/object associated with that function call.

function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}

const person = {
  name: "John",
};
greet.call(person, "Hello");

// 1. person.greet()

//    regular method call
//    this → person


// 2. greet.call(person)

//    this → person
//    execute now


// 3. greet.bind(person)

//    this → person
//    return NEW function


// 4. () => {}

//    arrow function has no own this
//    uses surrounding lexical this