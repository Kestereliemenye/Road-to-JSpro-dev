// let greet: Function;
// greet = () => {
//   console.log("hello again");
// };
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(3, 4);
// explicitly defined the return type
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 7);
console.log(result);
//  function signature
// let greet: Function
// example 1
let greet;
greet = (name, gretting) => {
    console.log(`${name} says ${gretting}`);
};
// example 2
let calc;
calc = (numberOne, numberTwo, action) => {
    if (action === "add") {
        return numberOne + numberTwo;
    }
    else {
        return numberOne - numberTwo;
    }
};
//  example 3
let logDetails;
logDetails = (kester) => {
    console.log(`${kester.name} is ${kester.age} years old`);
};
export {};
//# sourceMappingURL=func.js.map