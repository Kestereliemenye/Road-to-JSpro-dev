const me = {
    name: "kester",
    age: 23,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("i spent this", amount);
        return amount;
    },
};
// let someone: IsPerson
const greetPerson = (person) => {
    console.log("hello ", person.name);
};
greetPerson(me);
// CLASSES
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice("kester", "web work", 250);
docTwo = new Payment("Tobe", "Plumbing work", 200);
// adding the interface to arrays
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const inOne = new Invoice("kester", "work on the website", 200);
const inTwo = new Invoice("Simdi", "work on the website", 300);
// console.log(inOne, inTwo);
let invoices = [];
invoices.push(inOne);
invoices.push(inTwo);
invoices.forEach((inv) => {
    //   console.log(inv.format());
});
// const form = document.querySelector("form")!
const form = document.querySelector(".new-item-form");
// console.log(form.children);
//  inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list tenplate instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // use of tuple
    let values = [tofrom.value, details.value, amount.valueAsNumber];
    // to check type of payment
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
//  Generics allows us to make resueable block of code to allow diff types
const addUid = (obj) => {
    // with the T it recognizes theobj and its properties and the type of the object
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid }; // returna a new obj with the id
};
let docThree = addUid({ name: "kester", age: 40 });
// let docfour = addUid("hello") // this will work because the T doesnt specify to accept object only but with the extends it wont work..... futher more if the extends is an object it allows onlu object but if it is "{name: string}" it accepts onyl an object that has a name which must be  string
console.log(docThree);
// Enums
// are special type that allows us to store keywords and assign them to a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
//  example
const docFive = {
    // data work as a strong because we gave the corresponding <T> a string if i chnage to number it wont work
    uid: 1,
    rescourceName: ResourceType.BOOK,
    data: { name: "shawn the sheep" },
};
const docSix = {
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
let tup = 
// defind the structure of the array
["kester", 23, false];
tup[1] = 23;
// example
let student;
student = ["simdi", 122356];
//# sourceMappingURL=app.js.map