// % -- finds the remainder

// console.log(4 % 2) = 0

// + - * / %

// function fizzBuzz(num) {
   
//     if (num % 15 === 0) {
//         return "FizzBuzz";
//     } else if (num % 3 === 0) {
//         return "Fizz"; 
//     } else if (num % 5 === 0) {
//         return "Buzz";
//     } else {
//         return num
//     }
// }

// console.log(fizzBuzz());

// ^ We no longer want to take a parameter - print first 100 numbers
// we choose a FOR loop as we have a set range of iterations

//for ([initial - expression]; [condition]; [iterator]) {statement;}

function fizzBuzz() {
   
for (let i = 0; i <= 100; i++)    

    if (i === 0) { // account for 0 with modulous
        console.log(0)
    } else if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

fizzBuzz()
