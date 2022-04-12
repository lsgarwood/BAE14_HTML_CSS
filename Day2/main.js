// JavaScript != Java
// JavaScripts syntax at first may resemble but they are different
// Primarily front end tool

//Browser, inline, externally

console.log("Hello World!")

// Declaring variables

let fName = "Lauren"
const VALUE = "Never changing"
// default to const where possible, best practice to keep variables const as much as possible

// VALUE = "hjhg" would not print now as const before!
fName = "Lozzi" // would print as its previously let

// String
let surname = "Smith"

// Java numerical value = byte, short, int, long, float, double
// JS = Number

const age = 10
const salary = 150.40

// Arrays
let myArray = [10,12,13,"Hello"]

// Java the asic array could only take in one data type
// ArrayLost could only take in 1 object type

console.log(typeof age)
console.log(typeof salary)

console.log(myArray) // will print whole array
console.log(myArray[2]) //will print defined value
console.log(myArray[50]) // will say undefines as its not defined in list
myArray[50] = 122 // will give point 50 a value, but will create empty values between previous and 51

//boolean - they are switches

const trueOrFalse = false

// JS data types- Number, String, Object, Array, Undefined, Null
// undefined is a value that is undefined
// null is no value
let a;
let b = "12345";
let c = 12344;
let d = true;
let e = {a:"JavaScript"};

typeof(a);// will return null
typeof(b);// will return String
typeof(c);// will return number
typeof(d);// will return boolean
typeof(e);// will return object.

//String concatination

let str = "10 + 10" + 10;
console.log(str)
// Num + str == concat  
// use 10 + "" + 10
// str += means str = str +

//Literal ``
//$ used to exit the literal and enter JS to calculate or do things

const literalStuff = `My surname is ${surname}`
console.log(literalStuff)

// camelCaseLooksLikeThis
// snake_case_looks_like_this

//console.log statements
//console.log(); 
//console.info();
//console.warn();
//console.error();

// Day 2 JS Basics Ex 1
console.log("Lauren");
console.info("Garwood");
console.warn("Norfolk");
console.error("Libra");

// Day 2 JS Basics Ex 2
let myCar = "Audi";
let myModel = "A5";
console.log("My fave car is: " + myCar + " and fave model is: " + myModel);
console.log(`My fave car is: ${myCar} and fave model is: ${myModel}`);

//Day 2 JS BAsics Ex 3
// Styling of each of the console functions is also possible using CSS.
console.log("This is now %c the end of the exercises.","color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

// Day 2 Variables Ex 2
let totalMoney = 4000;
let moneyPaidSoFar = 2348;
let totalLeftToPay = (totalMoney-moneyPaidSoFar) ;

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is £${totalLeftToPay}`);


