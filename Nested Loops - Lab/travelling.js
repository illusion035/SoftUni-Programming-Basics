function travelling(params) {
    let destination = params.shift();
    let neededMoney = params.shift();

    while (destination !== "End") {
        let currentSavedMoney = 0;
        while (currentSavedMoney < neededMoney) {
            let savedMoney = Number(params.shift());
            currentSavedMoney += savedMoney;
        }
        console.log(`Going to ${destination}!`);
        destination = params.shift();
        neededMoney = params.shift();
    }
}

travelling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
