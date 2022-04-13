let calcChange = (cost, amount) => {
    change = amount - cost;
    tweNote = 0;
    tenNote = 0;
    fivNote = 0;
    twoPound = 0;
    onePound = 0;
    fifPence = 0;
    twePence = 0;
    tenPence = 0;
    fivPence = 0;
    twoPence = 0;
    onePence = 0;
    
    while (change >= 20) {
        change -= 20;
        tweNote++;
    }
    
    if (tweNote != 0) {
        console.log(tweNote + " £20 notes");
    }

    while (change >= 10) {
        change -= 10;
        tenNote++;
    }
    
    if (tenNote != 0) {
        console.log(tenNote + " £10 notes");
    }
    
    while (change >= 5) {
        change -= 5;
        fivNote ++;
    }
    
    if (fivNote != 0) {
        console.log(fivNote + " £5 notes");
    }
    
    while (change >= 2) {
        change -= 2;
        twoPound++;
    }
    
    if (twoPound != 0) {
        console.log(twoPound + " £2 coins");
    }
    
    while (change >= 1) {
        change -= 1;
        onePound++;
    }
    
    if (onePound != 0) {
        console.log(onePound + " £1 coins");
    }
    
    while (change >= 0.5) {
        change -= 0.5;
        fifPence++;
    }
    
    if (fifPence != 0) {
        console.log(fifPence + " 50p coins");
    }
    
    while (change >= 0.2) {
        change -= 0.2;
        twePence++;		
    }
    
    if (twePence != 0) {
        console.log(twePence + " 20p coins");
    }
    
    while (change >= 0.1) {
        change -= 0.1;
        tenPence++;
    }
    
    if (tenPence != 0) {
        console.log(tenPence + " 10p coins");
    }
    
    while (change >= 0.05) {
        change -= 0.05;
        fivPence++;
    }
    
    if (fivPence != 0) {
        console.log(fivPence + " 5p coins");
    }
    
    while (change >= 0.019) {
        change -= 0.019;
        twoPence++;
    }
    
    if (twoPence != 0) {
        console.log(twoPence + " 2p coins");
    }
    
    while (change >= 0.009) {
        change -= 0.009;
        onePence++;
    }
    
    if (onePence != 0) {
        console.log(onePence + " 1p coins");
    }
}

calcChange(4.67, 20);