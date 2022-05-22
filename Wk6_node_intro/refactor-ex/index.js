let total = 15;

function selectACard(){
    let value = Math.floor((Math.random() * 13) + 1);
    return value;
}

function displayPlayerTotal(){
    if(total >21){
        return "You have gone bust, dealer wins"
    }
    else{
        return "Your hand total is : " + total;
    }
}

module.exports.totalVariable = total;

module.exports.selectACard = selectACard;

module.exports.displayPlayerTotal = displayPlayerTotal;