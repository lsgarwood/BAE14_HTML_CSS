'use strict'
//query selectors
const titleEl = document.getElementById("title-el");
const countEl = document.getElementById("count-el");
const addOneEl = document.getElementById("plusone-el");
const saveEl = document.getElementById("save-el");
const HistoryEl = document.getElementById("history");

//variables
let count = 0;
let saveHistory = []

//functions
function increment() {
    count ++;
    countEl.textContent = count;
    console.log("we work"); //InnerHTML, TextContent, InnerText
}

function save() {
    saveHistory.push(count);
    countEl.textContent = count;
    HistoryEl.textContent = saveHistory;
    console.log("we save");
    count = 0;
    countEl.textContent = count;
}

//connect queries to functions in final event listeners
addOneEl.addEventListener("click", increment);
saveEl.addEventListener("click", save)