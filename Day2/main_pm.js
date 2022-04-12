// Function Fun JS

// Write a function named capital_indexes. The function takes a single parameter, which is a string. Your function should return a list of all the indexes in the string that have capital letters.
// For example, calling capital_indexes("HeLlO") should return the list[0, 2, 4]. Think split() function

// const str = "SomeUpperCaseText";
// const indexes = [];

// for(var i=0; i<inputString.length; i++){
//     if(inputString[i].match(/[A-Z]/) != null){
//         positions.push(i);
//     }
// }
//alert(positions);

var str = 'thisIsAString';
var matches = str.match(/[A-Z]/g);
console.log(matches);

// var locations = [];
// function getUpperLocs(var text = '') {
//     for(var i = 0;i == check.length();i++)
// {
//     if(checkUpper(text){
//         locations.push(i)
//     }
// } 
//     function checkUppercase(var str = '') {
//         return str === str.toUpper();
//     }
// }

// BlackJack
// Given 2 integer values greater than 0, return whichever is closest to 21 without going over 21. If they both go over 21 then return 0.
//  play (10, 21) -> 21
//  play (20, 18) -> 20
//  play (1, 22) -> 1
//  play (22, 23) -> 0

function playGame(numOne, numTwo) {
    if (numOne > 0 && numTwo > 0) {
        // function
        if (numOne > numTwo && numOne < 21) {
            console.log("numOne wins")
        } else if (numTwo > numOne && numTwo < 21) {
            console.log("numTwo wins")
        } else if (numOne + numTwo > 21) {
        console.log("Nobody wins")
        }
    }
}

//Ternary

if (1 + 1 === 2) {
    console.log("True")
} else {
    console.log("False")
}

// ? if true
// : if false
(1 + 1 === 2) ? console.log("True") : console.log("False")
