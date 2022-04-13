// Objects

//Data types
//Number
//BigInt
//String
//Object
//Boolean
//Null
//Array
//NaN
//undefined

//JSON- Javascript Object Notation
//Link frontend to backend -- API - Aplication Programming Interface

//Object is essentially this JSON form

let toyotaCar = new Object(); // do it like this to see the object in the inspection console

let hyundaiCar = {};

console.log(hyundaiCar)

//key:value pairs

let chrisCar = {
    name:"Chris's supercar",
    make:"Alfa Romeo",
    model:"e123",
    year:1999,
    colour:"green",
    "weird one": "Hello"
}

console.log(chrisCar) // prints all info

//dot notation object.variable/function() - use it when you can
//bracket notation- for weird one use this

console.log(chrisCar.model) // this dotnotation prints each item
console.log(chrisCar.name)
console.log(chrisCar["weird one"])

//we can change the items inside obj.key=value or add new items
chrisCar["engine"] = "A Big Big engine"
chrisCar.year = 1980

console.log(chrisCar)

//Nested array
let laurenCar = [{
    name:"Lauren's supercar",
    make:"Audi",
    model:"A5",
    year:2001,
    colour:"yellow",
    "weird one": "Boo"
}]


console.log(laurenCar[0])

// const obj = {
//     key : "value"
// }
// // This is OK
// obj.key = "new value";
// obj.newKey = "another value";

// // NOT OK - this is reassignment.
// obj = {
//     newKey: "new Value"
// }
// ^ This results in a TypeError: Assignment to constant variable.

const example = {
    name : "Reassignable"
}

//a lot simpler and quicker to declare objects

let car = { make: "Audi", model: "A5", carReg: "W8M8" };

// literal notation to create complex arrays

let carPark = [
    { make: "Audi", model: "A5", carReg: "AB12CDE" },
    { make: "hyundai", model: "i30", carReg: "AB11CDE" }
]
console.log(carPark);

//Array object methods
// sort
//reverse
//join
let d =["apple","strawberries","banana", "grapes", "pear"];

console.log(d); // ["apple", "strawberries", "banana", "grapes", "pear"]
console.log(d.sort()); // ["apple", "banana", "grapes", "pear", "strawberries"]
console.log(d.reverse());//["strawberries", "pear", "grapes", "banana", "apple"]
console.log(d.join()); //strawberries,pear,grapes,banana,apple

e = d.join("-");
console.log(e);// strawberries-pear-grapes-banana-apple

//push
//pop
console.log(d.push("lemon"));
console.log(d);//["strawberries", "pear", "grapes", "banana", "apple", "lemon"]
console.log(d.pop());
console.log(d);//["strawberries", "pear", "grapes", "banana", "apple"]

//unshift
//shift
console.log(d.unshift("kiwi"));
console.log(d); //["kiwi", "strawberries", "pear", "grapes", "banana", "apple"]
console.log(d.shift());
console.log(d); //["strawberries", "pear", "grapes", "banana", "apple"]

// Objects Ex
let darthVader = {
    allegiance : "empire",
    weapon : "lightsaber",
    sith : true,
};
console.log(darthVader);

console.log(darthVader.allegiance);
console.log(darthVader.weapon);
console.log(darthVader.sith);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

// Ex 3.1
let myArray = ["hello", "everyone"];
// Ex 3.2
console.log(myArray.length);
// Ex 3.3
console.log(myArray.push("Nice", "Day", "Today"));
// Ex 3.4
console.log(myArray.shift());
// Ex 3.5
for(let eachElement of myArray) {
    console.log(eachElement);
}
