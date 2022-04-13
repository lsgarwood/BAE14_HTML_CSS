'use strict'
//query selectors
const titleEl = document.querySelector("#title-el");
const countEl = document.querySelector("#count-el");
const addOneEl = document.querySelector("#plusone-el");
const saveEl = document.querySelector("#save-el");
const historyEl = document.querySelector("#history-el");

//variables
let count = 0;
let saveHistory = []

//functions
function increment() {
    count ++;
    countEl.textContent = count; //InnerHTML, TextContent, InnerText
    console.log("we work"); 
}

function save() {
    saveHistory.push(count);

    const li = document.createElement("li");
    li.textContent = count;
    historyEl.appendChild(li);
    console.log("now we save");
    count = 0;
    countEl.textContent = count;

    //historyEl.innerHTML += "<li>" + count + "<li/>";
    // for (let i = 0; i < saveHistory.length; i++) {
    //     historyEl.innerHTML += "<li>" + saveHistory[i] + "</li>"
    // }

    // countEl.textContent = count;
    // historyEl.textContent = saveHistory;
    // console.log("now we save");
    // count = 0;
    // countEl.textContent = count;
}

//connect queries to functions in final event listeners
addOneEl.addEventListener("click", increment);
saveEl.addEventListener("click", save)