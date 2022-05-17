console.log("Hello")

//let const -- let as its a variable that can be changed, const once set cnnot be changed

// when using CSS query selector make sure you use a # in front of id and . infront of a class

const inputElement = document.querySelector("#input-element")
const saveElement = document.querySelector("#save-button-el")
const deleteElement = document.querySelector("#delete-button-el")
const uListElement = document.querySelector("#u-list-el");

let inputSave = [];
let inputSaveHistory = "";

saveElement.addEventListener("click", function() {
    inputSave.push(inputElement.value)
    console.log(inputSave)

    //We are creating a node and this will be a new list item

    const node = document.createElement("li")

    //We are creating the text that will be added to the list element

    const textNode = document.createTextNode(inputElement.value)

    node.appendChild(textNode)

    uListElement.appendChild(node)

});

