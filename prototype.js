// const person = {
//   name: "John",
// };
// console.log(Object.getPrototypeOf(person) === Object.prototype);

// const animal = {
//   eat() {
//     console.log("Eating...");
//   },
// };

// const dog = Object.create(animal);

// dog.name = "Max";
// // dog.eat();
// Object.hasOwn(dog, "eat");

// // functions prototype
// function Person(name) {
//   this.name = name;
// }
// //  first prorotype pf person
// Person.prototype.greet = function () {
//   console.log(`Hello, I'm ${this.name}`);
// };
// // console.log(Person.prototype);

// const john = new Person("John"); // new creates an object and connects it with the protoype PERSON
// // console.log(john instanceof Person);
// // john.greet();
// // Object.getPrototypeOf(john);

// // ARRAY PROTOTYPES
// const numbers = [1, 2, 3];

// numbers.map((number) => number * 2);

// console.log(Object.getPrototypeOf(numbers) === Array.prototype);

// new js allows us to use class
// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// const Max = new Person("Max");

// Max.greet();

// // example 2
// const animal = {
//   type: "Animal",

//   speak() {
//     console.log("Making a sound");
//   },
// };

// const dog = Object.create(animal);

// dog.name = "Max";

// console.log(dog.name);
// console.log(dog.type);

// dog.speak();

// console.log(Object.hasOwn(dog, "name"));
// console.log(Object.hasOwn(dog, "type"));
// console.log(Object.getPrototypeOf(dog) === animal);

// classes and inheritance

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// const john = new Person("John", 20);
// john.greet();
// console.log(Object.hasOwn(john, "name"));
// console.log(Object.hasOwn(john, "greet"));// this will give us false because it comes from the contructoers prototype and it works because of protoype chain

// INHERITANCE
// imagine we have this
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log("Animal makes a sound");
//   }

//   eat() {
//     console.log(`${this.name} is eating`);
//   }
// }
// we make  a dog inherit from the class animal

// class Dog extends Animal {
//   bark() {
//     console.log("Woof!");
//   }
// }

// const max = new Dog("Max");
// max.bark()
// max.eat() // succesfull "extend"
// the prototype chain
// max
//  │
//  ▼
// Dog.prototype
//  │
//  │ bark()
//  ▼
// Animal.prototype
//  │
//  │ eat()
//  ▼
// Object.prototype
//  │
//  ▼
// null
// Dog becomes a subclass of animal
// now supposed dog needs more information like the breed
// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // super calls the parent clas "Animal"

//     this.breed = breed;
//   }

//   bark() {
//     console.log("Woof!");
//   }
// }

// //  super can also force parent methos on animal
// class Dog extends Animal {
//   speak() {
//     super.speak();

//     console.log("Dog says woof");
//   }
// }
// const max = new Dog("Max", "Labrador");
// // console.log(max.breed);
// max.speak()
// // max.bark();
// max.eat();

// A child class can replace inherited behavior.

class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Woof!");
  }
}

const max = new Dog();

// max.speak();
// max
//  │
//  ▼
// Dog.prototype

// speak()?
//    ✓

// STOP

// classes can alo have getters and setters

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  } //getter
  set changeName(newName) {
    this.name = newName;
  } // setter
}
const john = new Person("John", "Smith");

// console.log(john.fullName);
// john.changeName = "David";
// console.log(john.name);

// static methods
class Calculator {
  static add(a, b) {
    return a + b;
  }
}
Calculator.add(5, 3);
//  you dont use it as a instance
//  Calculator
// │
// └── add()

// calculator instance
// │
// └── does NOT get add()

// PRIVATE FIELDS

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}
const account = new BankAccount();

account.deposit(100);

console.log(account.getBalance());
// console.log(account.#balance); // it hides the variable

// a simple example with everything combined
class Animl {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Pig extends Animl {
  constructor(name, breed) {
    super(name);

    this.breed = breed;
  }

  bark() {
    console.log(`${this.name} says woof!`);
  }

  describe() {
    console.log(`${this.name} is a ${this.breed}`);
  }
}

const tobe = new Pig("Max", "Labrador");

tobe.eat();
tobe.bark();
tobe.describe();

//  this is the prototypr chain
// max
// │
// │ name
// │ breed
// │
// ▼
// Dog.prototype
// │
// │ bark()
// │ describe()
// │
// ▼
// Animal.prototype
// │
// │ eat()
// │
// ▼
// Object.prototype
// │
// ▼
// null

// example
class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  describe() {
    console.log(`This is a ${this.brand}`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // keeps the brand from the parent

    this.model = model; // adds a model 
  }

  describe() {
    console.log(`This is a ${this.brand} ${this.model}`);
  }
}

const car = new Car("Toyota", "Corolla");

car.describe();

console.log(car instanceof Car); // true
console.log(car instanceof Vehicle); // false -- true

console.log(Object.hasOwn(car, "brand"));// false -- true
console.log(Object.hasOwn(car, "describe")); //false



// RESTS DESSTRUCTURING
// | Syntax | Meaning |
// |---|---|
// | `{ name } = user` | Extract property |
// | `[first] = array` | Extract by position |
// | `...array` | Spread values |
// | `...object` | Spread properties |
// | `...rest` | Collect remaining values |
// | `?.` | Safely continue when value is nullish |
// | `??` | Fallback only for `null`/`undefined` |