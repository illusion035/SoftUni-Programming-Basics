function depositCalculator(input) {
    let depositAmount = Number([input[0]]);
    let termDeposit = Number(input[1]);
    let yearDeposit = Number(input[2]);

    let totalForOneYear = depositAmount * (yearDeposit / 100);
    let totalForOneMonth = totalForOneYear / 12;
    let totalMoney = depositAmount + (termDeposit * totalForOneMonth);
    console.log(totalMoney)
}

depositCalculator(["200", "3", "5.7"])