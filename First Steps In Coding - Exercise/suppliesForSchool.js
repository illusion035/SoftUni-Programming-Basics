function suppliesForSchool(input) {
    let countPens = Number(input[0]);
    let countMarkers = Number(input[1]);
    let liters = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPens = countPens * 5.8;
    let priceForMarkers = countMarkers * 7.2;
    let priceForDetergent = liters * 1.2;

    let totalPrice = priceForDetergent + priceForMarkers + priceForPens;
    let totalMoney = totalPrice - (totalPrice * (discount / 100));
    console.log(totalMoney)
}

suppliesForSchool(["2", "3", "4", "25"])