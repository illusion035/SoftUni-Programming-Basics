function shopping(input) {
    let graphicsCard = Number(250);
    let peterBudget = Number(input[0]);
    let graphicsCardCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let graphicsCardPrice = graphicsCard * graphicsCardCount

    let cpuPrice = graphicsCardPrice * 0.35
    let cputotalPrice = processorsCount * cpuPrice

    let ramPrice = graphicsCardPrice * 0.1
    let ramtotalPrice = ramCount * ramPrice
    
    let totalPrice = graphicsCardPrice + cputotalPrice + ramtotalPrice
    
    if (graphicsCardCount > processorsCount) {
        totalPrice *= 0.85;
    }

    let totalMoney = peterBudget - totalPrice

    if (peterBudget >= totalPrice) {
        console.log(`You have ${Math.abs(totalMoney).toFixed(2)} leva left!`)
    }
    else {
        console.log(`Not enough money! You need ${Math.abs(totalMoney).toFixed(2)} leva more!`)
    }
}

shopping(["920.45",
"3",
"1",
"1"])

