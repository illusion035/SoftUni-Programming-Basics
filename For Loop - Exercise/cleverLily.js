function cleverLily(input) {
    let age = Number(input[0]);
    let washingmachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toysCounter = 0;
    let stolenMoney = 0;
    let savedMoney = 0;
    let addMoney = 10;

    for (let currentAge = 1; currentAge <= age; currentAge++) {
        if (currentAge % 2 === 0) {
            stolenMoney++;
            savedMoney += addMoney;
            addMoney += 10;
        } else {
            toysCounter++;
        }
    }

    let totalMoneyForToys = toysCounter * singleToyPrice;
    let totalSavedMoney = savedMoney + totalMoneyForToys - stolenMoney;

    if (totalSavedMoney >= washingmachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washingmachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washingmachinePrice - totalSavedMoney).toFixed(2)}`)
    }
}

cleverLily(["10",
    "170.00",
    "6"])