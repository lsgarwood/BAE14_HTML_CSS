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
typeof(e);// will return object.\

let myName = "Ollie Tabooger"; //string
let myNumber = 20; //number
let myBigInt = 1234567891234567891234567891234567890n; //BigInt
let myBool = false; //boolean
let myAge = null; //null value
let dob; //undefined
let myObject = {firstName:"Felix", lastName:"Cited"}; //object

//String can be written using double or single quotes.
let answer1 = "It's alright";             // Single quote inside double quotes
let answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
let answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes

//Extra large or extra small numbers can be written with scientific (exponential) notation.
let myBigNumber = 123e5; //12300000
let mySmallNumber = 123e-5; //0.00123

//Finally we can use the typeOf operator in order to find out the type of the javascript variable.
let x = "";
typeof(x);// will return String
let y = "String";
typeof(y) // will return string also.
let z;
typeof(z) //Will have a value of undefined and a type of undefined.
let w = null;
typeof(w);// Will return Object and not of type null as expected.
let myObj = {firstName:"Felix", lastName:"Cited"};
typeof(myObj); //Will return Object.


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

//modifyMe - An arrayto show off our methods
//Push and pop - stack - adding/removing variable from the end of a list/array
//shift and unshift - from the start fi the list add/remove

let modifyMe = [1,2,3,4,5,6,7,8,9]; // set up array
console.log(modifyMe); // print it out

modifyMe.pop(); // remove last element
console.log(modifyMe); //

const removeLastNum = modifyMe.pop(); 
console.log(modifyMe);

modifyMe.push(1,4,67,8);
modifyMe.push("A number");
console.log(modifyMe);

const removeFirst = modifyMe.shift();
console.log(modifyMe);

modifyMe.unshift("Another One");
console.log(modifyMe);

// checking for equality
// == equality
// = assignment

let variable = "Something"; // has a value
console.log(1 == 1); //stores a boolean

let booHoo = true;
let booHooMan = true;

console.log(booHoo == booHooMan);

// == loose equality - as we also want to 

console.log(booHoo == 1); // true == 1 so its technically correct but we want to check data type too

// === use three signs to get strict equality
// compares data types too

// If Statements
// (boolean) - JS will assume that the statement is read like
//(boolean === true)
if (booHoo) { 
    console.log("booHoo is for you")
} else {
    console.log("I like ASOS anyway")
}
//(!boolean) = (boolean === false)
// if (this condition is true) {
//     ... do this
// } else {
//    ... do this instead
// }
// elif -- python exclusive
// else if everyone else
// or, and 
//nested...complicated
if (booHoo) { 
    if (booHooMan) {
    console.log("booHoo is for you") 
    }
} else {
    console.log("I like ASOS anyway")
}
//do this instead
if (booHoo && booHooMan) { 
    console.log("booHoo is for you")
} else {
    console.log("I like ASOS anyway")
}

//ordering if statemnents is importnt as it runs through from beginning so if it hits true forts will stop running.

let golfScore = ["hole in one", "eagle", "birdie", "par", "Bogey", "Double Bogey"]
let strokes = 1, par

//if the par for a course is five and the person has had 6 strokes thats a bogey

if (strokes === 1) {
    console.log(golfScore[0])
} else if (strokes <= par - 2) {
    console.log(golfScore[1])
} else if (strokes === par - 1) {
    console.log(golfScore[2])
} else if (strokes === par) {
    console.log(golfScore[3])
} else if (strokes === par + 1) {
    console.log(golfScore[4])
} else if (strokes === par + 2) {
    console.log(golfScore[5])
}
