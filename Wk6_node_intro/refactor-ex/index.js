let handValues =[];
let total = 0;
let dealerTotal = 0;

function selectACard(){
    let value = Math.floor((Math.random() * 13) + 1);
    return value;
}

function playerDeal(){
    let punter1 = selectACard();
    total = total + punter1;
    let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        let newEntry = document.createTextNode(punter1);
        newCell.appendChild(newEntry);
        newRow.appendChild(newCell);
        document.getElementById("table1").appendChild(newRow)

}

function dealerDeal(){
    let dealer1 = selectACard();
    dealerTotal = dealerTotal + dealer1;
    let newRow = document.createElement("tr");
        let newCell = document.createElement("td");
        let newEntry = document.createTextNode(dealer1);
        newCell.appendChild(newEntry);
        newRow.appendChild(newCell);
        document.getElementById("table2").appendChild(newRow)
}

function deal(){
    playerDeal();
    playerDeal();
    displayPlayerTotal();
    dealerDeal();
    dealerDeal();
    displayDealerTotal();
}

function displayPlayerTotal(){
    if(total >21){
        totalHeld.innerHTML = "You've gone Bust";
        resultDiv.innerHTML = "Dealer Wins";

    }
    else{
    totalHeld.innerHTML = "Your hand total is : " + total;
    }
}

function displayDealerTotal(){
    if(total >21){
        totalHeld.innerHTML = " Bust ";
    }
    else{
    dealerHeld.innerHTML = "Dealer total is : " + dealerTotal;
    }
        
}

function render() {
    playerDeal();
    displayPlayerTotal();
    if(total>21){
        resultDiv.innerHTML = "Dealer Wins";
    }
   
      
}

function stand(){
    if (dealerTotal<18){
        dealerDeal();
    }
    displayDealerTotal();
    giveFeedback();
}

function giveFeedback(){
    if (total>21){
        resultDiv.innerHTML = "Dealer wins";
        
    }
    else if(dealerTotal>21){
        resultDiv.innerHTML = "You win";
    }
    else if(dealerTotal > total){
        resultDiv.innerHTML = "Dealer wins";
    }
    else if(dealerTotal == total){
        resultDiv.innerHTML = "You win";
    }
    else{
        resultDiv.innerHTML = "You win";
    }
}

function totalInHand(){
    for (let i=0; i<handValues.length; i++){
        let total = total + handValues[i];
    }
    totalHeld.value = total;
}

function refresh(){

    window.location.reload();

}
function restart(){

}

function start(){
    but1 = document.createElement("button");
    let buttonMessage1 = document.createTextNode("draw");
    but1.appendChild(buttonMessage1);
    testDiv.appendChild(but1);
    let but2 = document.createElement("button");
    let buttonMessage2 = document.createTextNode("stick");
    but2.appendChild(buttonMessage2);
    testDiv.appendChild(but2);
    let but3 = document.createElement("button");
    let buttonMessage3 = document.createTextNode("redeal");
    but3.appendChild(buttonMessage3);
    testDiv.appendChild(but3);
}