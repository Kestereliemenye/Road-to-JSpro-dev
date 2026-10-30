// let greet: Function;

// greet = () => {
//   console.log("hello again");
// };

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(3, 4);

// explicitly defined the return type
const minus = (a: number, b: number): number => {
  return a - b;
};

let result = minus(10, 7);
console.log(result);

//  function signature
// let greet: Function

// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, gretting: string) => {
  console.log(`${name} says ${gretting}`);
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numberOne: number, numberTwo: number, action: string) => {
    if (action === "add") {
        return numberOne + numberTwo
    } else {
        return numberOne - numberTwo
    }
};


//  example 3
let logDetails: (obj:{name:string, age:number}) =>void

logDetails = (kester:{ name: string, age: number })=> {
        console.log(`${kester.name} is ${kester.age} years old`);
        
}
