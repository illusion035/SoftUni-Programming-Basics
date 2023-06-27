function toyShop(input) {
    let journeyPrice = Number(input[0])
    let puzzlePrice = Number(input[1])
    let dollPrice = Number(input[2])
    let toysPrice = Number(input[3])
    let minionPrice = Number(input[4])
    let truckPrice = Number(input[5])

    let puzzle = 2.60
    let doll = 3
    let toy = 4.10
    let minion = 8.20
    let truck = 2

    let totalCount = puzzlePrice + dollPrice + toysPrice + minionPrice + truckPrice
    let earnMoney = (puzzlePrice * puzzle) + (dollPrice * doll) + (toysPrice * toy) + (minionPrice * minion) + (truckPrice * truck)
    
    if (totalCount >= 50) {
        earnMoney *= 0.75
    }
    earnMoney *= 0.90

    if (earnMoney >= journeyPrice) {
        console.log(`Yes! ${(earnMoney - journeyPrice).toFixed(2)} lv left.`);
    } else if (earnMoney < journeyPrice) {
        console.log(`Not enough money! ${Math.abs(earnMoney - journeyPrice).toFixed(2)} lv needed.`);
    }
 }

toyShop(["40.8",
"20",
"25",
"30",
"50",
"10"])
