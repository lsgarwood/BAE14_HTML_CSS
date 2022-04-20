// Callbacks are esentially functions that take inanother function as a parameter

const helloSir = (name) => {
    alert("Hello Sir: " + name);
    return name
}

const saveName = (callback) => {
    let username = prompt("Please enter username:");
    callback(username);
    console.log ("Finished")
}

saveName(helloSir);

//promises

/* 
a promise is a placeholder for some data
avaialable immediately, some time in the future or never at all
*/

//catch -- if or when an error happens how do we handle it

let prom = new Promise((resolve, reject) => {
    let theNumberTen = 5 + 5;
    if (theNumberTen === 3) {
        // we say what happens in the success outcome
        resolve(console.log("yay"));
    } else {
        // we say what happens in the reject outcome
        reject(console.log("Oh no"));
    }
})

// Exercise
// const increase = (val) => {
//     alert(`Your new value is ${val+10}`);
// }

// const userInput = (enter) => {
//     let val = parseInt(prompt("Please enter a value"));
//     enter(val);
// }
// userInput(increase)

// const increase = (val) => {
//     alert(`The new value is ${val+10}`);
// }

// const parent = (child) => {
//     let value = parseInt(prompt("Please enter a value"));
//     child(value);
// }

// parent(increase);

//Promise
let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if (a == 2) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

p.then((message) => {
    console.log("This is in the then " + message);
}).catch((message) => {
    console.log("This is in the catch " + message);
});