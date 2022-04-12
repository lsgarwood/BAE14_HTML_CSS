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

