// Callbacks are esentially functions that take inanother function as a parameter

const helloSir = (name1) => {
    alert("Hello Sir:" + name1);
    return name1
}

const saveName = (callback) => {
    let username = promt("Please enter  username:");
    callback(username);
}

saveName(helloSir("Lauren"));

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
        reject(console.log("Oh no"))
    }
})

// Exercise
const increase = (val) => {
    alert(`Your new value is ${val+10}`);
}

const userInput = (enter) => {
    let val = parseInt(promt("Please enter a value"));
    enter(val);
}
userInput(increase)

// const increase = (val) => {
//     alert(`The new value is ${val+10}`);
// }

// const parent = (child) => {
//     let value = parseInt(prompt("Please enter a value"));
//     child(value);
// }

// parent(increase);