// const character = "mario"

// console.log(character);

// const input = document.querySelectorAll("input")

// // console.log(input);
// input.forEach(() => {
//     console.log(input);

// })

// // TYPES IN TYPESCRIPT  ---- allows to chnage the value but not the type
// let character = "kester"

// let age = 20
// let isBlackBelt = false

// // character = 20
// character = "simdi"

// // to declare type of function
// const circ = (diamteter:any) => {
//     return diamteter * Math.PI;
// }
// console.log(circ(20));

// // arrraya as types
// let names = ["kester", "simdi", "caty"]

// names.push("tomato")
// names[0] = "toto"

// let number = [12,34,5,5,5]
// number.push(3)

// // mixed array
// let mixed = ["ken", 3,"dart", true]
// mixed.push(true)
// mixed.push("john");
// // names.push(9)a

// // objects
// let kester = {
//     name: "kester",
//     belt: "black",
//     age: 30
// }

// kester.age = 9
// kester.name = "ryuonmen"

//  explicit types

let character: string;
let age: Number;
let isLoggedIn: boolean;

age = 30

// arrays
let kester: string[] // array of strings

// union type ---- is a way of saying an array can be of different types
let mixed:(string|number)[] = []

mixed.push(23)
mixed.push("23")
console.log(mixed);

// union type on a variable
let uid: string | number;
uid = "123"
uid = 123

// objects
let kesterOne: object
kesterOne = {
    name: "kester",
    age: 30
}


// specific object
let kesterTwo:{name:string, age:number}


// any type

let ages:any
ages = "23"