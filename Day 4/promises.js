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
        resolve(console.log("yay"));
    } else {
        reject(console.log("Oh no"))
    }
})