//  interfaces adds structure within classses or object
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "kester",
  age: 23,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("i spent this", amount);
    return amount;
  },
};
// let someone: IsPerson
const greetPerson = (person: IsPerson) => {
  console.log("hello ", person.name);
};
greetPerson(me);

// CLASSES

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import type { HasFormatter } from "./interfaces/HasFormatter";

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("kester", "web work", 250);
docTwo = new Payment("Tobe", "Plumbing work", 200);

// adding the interface to arrays
let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const inOne = new Invoice("kester", "work on the website", 200);
const inTwo = new Invoice("Simdi", "work on the website", 300);
// console.log(inOne, inTwo);
let invoices: Invoice[] = [];
invoices.push(inOne);
invoices.push(inTwo);

invoices.forEach((inv) => {
  //   console.log(inv.format());
});
// const form = document.querySelector("form")!

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// console.log(form.children);

//  inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;

const amount = document.querySelector("#amount") as HTMLInputElement;


// list tenplate instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    // use of tuple

    let values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

  // to check type of payment
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }
  list.render(doc, type.value, "end");
});

//  Generics allows us to make resueable block of code to allow diff types
const addUid = <T extends { name: string }>(obj: T) => {
  // with the T it recognizes theobj and its properties and the type of the object
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid }; // returna a new obj with the id
};
let docThree = addUid({ name: "kester", age: 40 });
// let docfour = addUid("hello") // this will work because the T doesnt specify to accept object only but with the extends it wont work..... futher more if the extends is an object it allows onlu object but if it is "{name: string}" it accepts onyl an object that has a name which must be  string
console.log(docThree);

// Enums
// are special type that allows us to store keywords and assign them to a numeric value

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

// using generics with interfaces

// an interface defines how an object should look
interface Resource<T> {
  // using generic T
  uid: number;
  rescourceName: ResourceType;
  data: T; // now we want the data to be a strong or a number or a string and number thats where generics comes in
}

//  example
const docFive: Resource<object> = {
  // data work as a strong because we gave the corresponding <T> a string if i chnage to number it wont work
  uid: 1,
  rescourceName: ResourceType.BOOK,
  data: { name: "shawn the sheep" },
};

const docSix: Resource<string[]> = {
  // array of string
  uid: 2,
  rescourceName: ResourceType.PERSON,
  data: ["test", "score"],
};

console.log(docFive, docSix);

// tuples

//  the data is fixed when initialized
let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "kester"]; // normal array

// tuple doesnt allow the data to chnage
let tup: [string, number, boolean] =
  // defind the structure of the array
  ["kester", 23, false];
  tup[1] = 23

// example
  let student : [string, number]
  student = ["simdi", 122356]
