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
let myBool = false; boolean
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


