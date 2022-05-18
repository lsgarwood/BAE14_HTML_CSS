let total = 0;

function selectACard(){
    let value = Math.floor((Math.random() * 13) + 1);
    return value;
}

function displayPlayerTotal(){
    if(total >21){
        let totalHeld = "You've gone Bust";
        let resultDiv = "Dealer Wins";

    }
    else{
        let totalHeld = "Your hand total is : " + total;
    }
}

module.exports.totalVariable = total;

module.exports.selectACard = selectACard;

module.exports.displayPlayerTotal = displayPlayerTotal;